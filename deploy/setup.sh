#!/bin/bash
# ============================================
# Davidas Design Concepts - EC2 Setup Script
# Run this on a fresh Amazon Linux 2023 or Ubuntu 22.04+ EC2 instance
# ============================================
set -e

echo "=== Davidas Design Concepts - EC2 Deployment ==="
echo ""

# Detect OS
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
fi

echo "[1/5] Installing Nginx and Git..."
if [ "$OS" = "amzn" ] || [ "$OS" = "amazon" ]; then
    sudo dnf update -y
    sudo dnf install -y nginx git
elif [ "$OS" = "ubuntu" ] || [ "$OS" = "debian" ]; then
    sudo apt update -y
    sudo apt install -y nginx git
else
    echo "Unsupported OS. Install nginx and git manually."
    exit 1
fi

echo "[2/5] Creating web directory..."
sudo mkdir -p /var/www/davidas
sudo chown -R $USER:$USER /var/www/davidas

echo "[3/5] Cloning site from GitHub..."
cd /tmp
rm -rf devidas-new-concept
git clone https://github.com/sny21292/devidas-new-concept.git
cp -R devidas-new-concept/* /var/www/davidas/
rm -rf devidas-new-concept

echo "[4/5] Configuring Nginx..."
sudo cp /var/www/davidas/deploy/nginx.conf /etc/nginx/conf.d/davidas.conf

if [ "$OS" = "amzn" ] || [ "$OS" = "amazon" ]; then
    sudo sed -i 's/^/#/' /etc/nginx/nginx.conf.default 2>/dev/null || true
    # Remove default server block if it conflicts
    sudo rm -f /etc/nginx/conf.d/default.conf 2>/dev/null || true
elif [ "$OS" = "ubuntu" ] || [ "$OS" = "debian" ]; then
    sudo rm -f /etc/nginx/sites-enabled/default
fi

sudo nginx -t
sudo systemctl enable nginx
sudo systemctl restart nginx

echo "[5/5] Configuring firewall..."
if command -v ufw &> /dev/null; then
    sudo ufw allow 'Nginx HTTP'
fi

echo ""
echo "============================================"
echo "  Deployment complete!"
echo "============================================"
echo ""
echo "  Your site is live at:"
echo "  http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || echo '<your-ec2-public-ip>')"
echo ""
echo "  Make sure your EC2 Security Group allows"
echo "  inbound traffic on port 80 (HTTP)"
echo "============================================"
