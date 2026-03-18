#!/bin/bash
# ============================================
# Deploy from Mac to EC2 via SCP
# Usage: ./deploy-from-mac.sh <ec2-public-ip> <path-to-key.pem>
#
# Example:
#   ./deploy-from-mac.sh 54.123.45.67 ~/Downloads/my-key.pem
# ============================================
set -e

EC2_IP="${1:?Usage: $0 <ec2-public-ip> <path-to-key.pem>}"
KEY_FILE="${2:?Usage: $0 <ec2-public-ip> <path-to-key.pem>}"
EC2_USER="ec2-user"  # Change to "ubuntu" for Ubuntu AMIs

SITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "=== Deploying Davidas Site to EC2 ==="
echo "EC2: $EC2_USER@$EC2_IP"
echo "Key: $KEY_FILE"
echo "Source: $SITE_DIR"
echo ""

echo "[1/3] Uploading site files..."
rsync -avz --progress \
    -e "ssh -i $KEY_FILE -o StrictHostKeyChecking=no" \
    --exclude '.git' \
    --exclude 'deploy' \
    --exclude '.gitignore' \
    "$SITE_DIR/" "$EC2_USER@$EC2_IP:/tmp/davidas-upload/"

echo "[2/3] Installing on server..."
ssh -i "$KEY_FILE" -o StrictHostKeyChecking=no "$EC2_USER@$EC2_IP" << 'REMOTE'
    sudo mkdir -p /var/www/davidas
    sudo cp -R /tmp/davidas-upload/* /var/www/davidas/
    sudo chown -R nginx:nginx /var/www/davidas 2>/dev/null || sudo chown -R www-data:www-data /var/www/davidas
    rm -rf /tmp/davidas-upload

    # Restart nginx if running
    if systemctl is-active --quiet nginx; then
        sudo systemctl reload nginx
        echo "Nginx reloaded."
    else
        echo "Nginx not running. Run setup.sh first."
    fi
REMOTE

echo ""
echo "[3/3] Done!"
echo ""
echo "  Site is live at: http://$EC2_IP"
echo ""
