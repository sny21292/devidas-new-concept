const CATEGORIES = [
  {
    id: "ladies",
    label: "Ladies",
    subcategories: [
      { id: "bracelets", label: "Bracelets" },
      { id: "earrings", label: "Earrings" },
      { id: "pendants", label: "Pendants" },
      { id: "rings", label: "Rings" }
    ]
  },
  {
    id: "religious",
    label: "Religious Jewelry",
    subcategories: [
      { id: "cross", label: "Cross" },
      { id: "gospel-necklace", label: "Gospel Necklace" }
    ]
  },
  {
    id: "wedding",
    label: "Wedding",
    subcategories: [
      { id: "engagement", label: "Engagement & Bands" }
    ]
  },
  {
    id: "gents",
    label: "Gents",
    subcategories: [
      { id: "rings", label: "Rings" },
      { id: "pendants", label: "Pendants" }
    ]
  },
  {
    id: "specialty",
    label: "Specialty",
    subcategories: [
      { id: "professional", label: "Professional" },
      { id: "novelty", label: "Novelty" }
    ]
  }
];

const PRODUCTS = [
  // Ladies — Bracelets
  {
    style: "117-211",
    name: "Wave Bracelet",
    category: "ladies",
    subcategory: "bracelets",
    description: "This is a beautiful silver cuff bracelet designed to represent ocean waves.",
    metals: "Silver",
    sizes: "",
    karats: "",
    image: "images/Ladies_Bracelets/117-211/A.png"
  },
  {
    style: "415-627",
    name: "Cuff Bracelet",
    category: "ladies",
    subcategory: "bracelets",
    description: "The bracelet can be made in two-tone metals and also have stones added to make into a family bracelet.",
    metals: "Two-Tone",
    sizes: "",
    karats: "",
    image: "images/Ladies_Bracelets/415-627/A.png"
  },
  {
    style: "741-333",
    name: "Music Bracelet",
    category: "ladies",
    subcategory: "bracelets",
    description: "This is a beautiful silver bracelet with actual notes from L. van Beethoven \"Fur Elise\". The bracelet measures from 1.8 inches to 2.4 inches wide.",
    metals: "Silver",
    sizes: "",
    karats: "",
    image: "images/Ladies_Bracelets/741-333/501.png"
  },
  {
    style: "777-421",
    name: "Mermaid Bracelet",
    category: "ladies",
    subcategory: "bracelets",
    description: "This is a beautiful silver bracelet designed to represent ocean waves with an exquisitely detailed 14 karat gold mermaid sunbathing and riding the waves. The mermaid can be made with or without the top and any combination of metals. We will only make 100 of these bracelets to give them exclusivity. The bracelet is pictured with 13 diamonds for a total weight of .42 carat. Bracelet can be made with or without stones and stones can be any type.",
    metals: "Silver, Gold",
    sizes: "",
    karats: "14K",
    image: "images/Ladies_Bracelets/777-421/B.png"
  },

  // Ladies — Earrings
  {
    style: "843-117",
    name: "Dangle Earrings",
    category: "ladies",
    subcategory: "earrings",
    description: "Earrings pictured have a 7X5 oval center stone surrounded by 16 round gems each. Earrings are approximately 1.75 inches long. Earrings can be made for any combination of stones.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies%20Earrings/843-117/A.png"
  },
  {
    style: "843-331",
    name: "Filigree Ball Earrings",
    category: "ladies",
    subcategory: "earrings",
    description: "20 mm gold filigree ball earrings (.8 inches in diameter). Earrings are approximately 2.5 inches long. Earrings can be made in gold or silver.",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Ladies%20Earrings/843-331/Etsy-2.png"
  },

  // Ladies — Pendants
  {
    style: "113-213",
    name: "Halo Pendant",
    category: "ladies",
    subcategory: "pendants",
    description: "A beautiful pendant that can be made in any combination of metals. Excluding the center stone, it contains 62 diamonds for a total weight of .40 carat. Pendant can be made for any size center stone and diamonds can be changed to any gemstone.",
    metals: "Gold, Silver, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Pendants/113-213/C.png"
  },
  {
    style: "117-431",
    name: "Trillion Pendant",
    category: "ladies",
    subcategory: "pendants",
    description: "A beautiful pendant with an 8 millimeter trillion center stone surrounded by 21 diamonds with a total weight of .26 carat. Chain not included. Pendant can be made for any size center stone and diamonds can be changed to any gemstone.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Pendants/117-431/D.png"
  },
  {
    style: "554-701",
    name: "Pearl Pendant",
    category: "ladies",
    subcategory: "pendants",
    description: "A beautiful pendant with a 12 millimeter Tahitian Pearl. Pendant can be made for any size pearl.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Pendants/554-701/D.png"
  },
  {
    style: "623-743",
    name: "Cupid Heart Pendant",
    category: "ladies",
    subcategory: "pendants",
    description: "This exquisite sterling silver pendant measures approximately 1 inch tall and is plated with 14 karat yellow gold on the hearts with 14 karat green gold on the leaves and 14 karat rose gold on the roses. A truly beautiful pendant.",
    metals: "Sterling Silver, Gold",
    sizes: "",
    karats: "14K",
    image: "images/Ladies_Pendants/623-743/A.png"
  },

  // Ladies — Rings
  {
    style: "405-713",
    name: "Forget-Me-Not Ring",
    category: "ladies",
    subcategory: "rings",
    description: "This sterling silver ring is a beautiful accessory for casual or formal dress. Ring can be made in gold or silver.",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/405-713/A.png"
  },
  {
    style: "409-157",
    name: "Antique Style Ring",
    category: "ladies",
    subcategory: "rings",
    description: "An antique style ring. Ring can be adjusted to accommodate any size center stone. Depending on the size of the center stone, ring will hold 42 to 62 gems for a total weight of 1.3 to 1.5 carats. This does not include the center stone. Ring can be made in gold or platinum and adjusted to accommodate stones you may have.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/409-157/D.png"
  },
  {
    style: "409-203",
    name: "Edwardian Style Ring",
    category: "ladies",
    subcategory: "rings",
    description: "An Edwardian style ring. Ring can be adjusted to accommodate any size center stone. Depending on the size of the center stone, ring will hold 42 to 62 gems for a total weight of 1.3 to 1.5 carats. This does not include the center stone. Ring can be made in gold or platinum and adjusted to accommodate stones you may have.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/409-203/E.png"
  },
  {
    style: "417-186",
    name: "Branch Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A branch style ring. This ring takes a lot of small stones of different sizes and incorporates them into a nice design. Stones can be different kinds and colors. We have made this as a mother's ring with different branches representing different branches of the family and children. Ring can be made in silver, gold or platinum and adjusted to accommodate stones you may have.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/417-186/A.png"
  },
  {
    style: "417-727",
    name: "Oval Gemstone Ring",
    category: "ladies",
    subcategory: "rings",
    description: "Ring can be adjusted to accommodate any size center stone. Ring is pictured with a 7.5 X 5.5 Rhodolite Garnet center with 16 1.5 millimeter Tsavorite Garnets around it. Ring can be made in gold or platinum and adjusted to accommodate stones you may have.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/417-727/A.png"
  },
  {
    style: "721-353",
    name: "Leaf Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A popular style ring usually done in silver. Any color enamel can be substituted for granular finish. Ring can be made in silver or gold in any karat.",
    metals: "Silver, Gold",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/721-353/F.png"
  },
  {
    style: "777-353",
    name: "Baguette Diamond Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A new design that is truly dazzling. Ring contains a total of 363 gems with 8 carats of tapered baguette diamonds and .53 carats of round diamonds for a total weight of 8.53 carats. Ring can be made in 14 or 18 karat gold and diamond quality can be adjusted.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "14K, 18K",
    image: "images/Ladies_Rings/777-353/F.png"
  },
  {
    style: "933-101",
    name: "Tahitian Pearl Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A beautiful chic design with a 10 millimeter Tahitian Pearl surrounded by 138 diamonds with a total weight of .70 carats. Ring can be adjusted to hold any size pearl. Ring can be made in gold or platinum.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/933-101/D.png"
  },
  {
    style: "933-222",
    name: "Dome Ring",
    category: "ladies",
    subcategory: "rings",
    description: "Ring is pictured with 32 diamonds for a total weight of .45 carat and 36 round Citrine gemstones. Ring can be made with any combination of gemstones. Ring can be made in gold or platinum.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/933-222/A.png"
  },
  {
    style: "933-227",
    name: "Football Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A ring for the lady football aficionado. Ring is accented with 69 gems total. 52 diamonds in ring for a total weight of .35 carat and 17 gems in the football which can be any gem you choose. Ring can be made in gold, platinum or two-tone metals.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/933-227/A.png"
  },
  {
    style: "933-301",
    name: "Cluster Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A beautiful cluster ring with a 1 carat diamond center surrounded by 15 smaller diamonds with a total weight of .35 carat. Ring can be made in gold, platinum or two-tone metals.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/933-301/D.png"
  },

  // Religious Jewelry — Cross
  {
    style: "230-103",
    name: "Dogwood Flower Cross Pendant",
    category: "religious",
    subcategory: "cross",
    description: "This exquisite sterling silver cross pendant draws inspiration from the beauty of the Dogwood Flower. Its fine craftsmanship, wonderfully sculpted flower petals, and rich symbolic meaning, all come together to form a captivating pendant. The Dogwood Flower forms a cross and has ties to the crucifixion, making it a symbol of Christianity. Optional contrasting center flower bud in yellow or rose gold to signify the blood of Jesus.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Cross%20Pendants/117-326/AA.png",
    video: "https://ijewel.design/embedded?slug=11b4b1a&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false",
    formHint: "Metal Karat, Color and Arrangement"
  },
  {
    style: "330-102",
    name: "Filigree Cross Pendant",
    category: "religious",
    subcategory: "cross",
    description: "This beautifully crafted cross pendant is a reminder of the Savior\u2019s love woven into every detail. The frame represents the unshakable strength of God\u2019s promises, while the intricate filigree symbolizes the grace that fills and sustains every believer. Designed to be both elegant and deeply meaningful, this piece serves as a quiet testimony of faith \u2014 a way to carry the story of Christ close to your heart and let His light shine through your life. Whether worn daily or given as a gift, it speaks of devotion, hope, and the beauty of walking with Him.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Cross%20Pendants/345-452/B.png",
    video: "https://ijewel.design/embedded?slug=802ddc2&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false",
    formHint: "Metal Karat, Color and Arrangement"
  },
  {
    style: "530-102",
    name: "Black & White Diamond Cross Pendant",
    category: "religious",
    subcategory: "cross",
    description: "Crafted with reverence and intention, this diamond cross pendant is a radiant reminder of Christ\u2019s sacrifice and His unending love. Set with 138 handplaced diamonds \u2014 a total weight of 1.25 carats \u2014 each stone reflects the light much like the grace that covers every believer. The black and white diamonds reflect the contrast between light and darkness \u2014 a reminder of the moment when Christ overcame the shadows and hope was born. Each gemstone combination can be set to honor the majesty of a believer\u2019s faith, turning this piece into a testimony you wear, a conversation it invites, and a quiet declaration of what you believe.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Cross%20Pendants/113-334/C.png",
    video: "https://ijewel.design/embedded?slug=020c23e&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false",
    formHint: "Metal Karat, Color and Gemstone Arrangement"
  },
  {
    style: "330-101",
    name: "Gemstone Cross Pendant",
    category: "religious",
    subcategory: "cross",
    description: "Crafted with intention and reverence, this cross pendant features 54 gems, and can be set with any combination of gemstones, allowing every piece to become a personal expression of faith. Whether adorned with diamonds, emeralds, sapphires, or a meaningful blend of colors, this cross becomes more than jewelry. It becomes a reminder of grace, a spark for conversation, and a quiet declaration of the hope you carry.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Cross%20Pendants/117-542/A.png",
    video: "https://ijewel.design/embedded?slug=7391e8e&isRemoveLoadingBgImg=false&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false",
    formHint: "Metal Karat, Color and Gemstone Arrangement"
  },

  // Wedding — Engagement & Bands
  {
    style: "409-222",
    name: "Bezel Set Filigree Engagement Ring",
    category: "wedding",
    subcategory: "engagement",
    description: "Ring pictured with a 1/2 carat center stone with 56 accent gems with a total weight of .35 carat giving ring a total weight of .85 carat. Can be made for any size center stone.",
    metals: "Gold, Platinum, Two-Tone",
    sizes: "Any center stone size",
    karats: "",
    image: "images/Engagement/409-222/D.png"
  },
  {
    style: "409-374",
    name: "Scroll Engagement Ring",
    category: "wedding",
    subcategory: "engagement",
    description: "Ring pictured with a .75 carat center stone with 10 accent gems with a total weight of .15 carat giving ring a total weight of .90 carat. Can be made for any size center stone.",
    metals: "Gold, Platinum",
    sizes: "Any center stone size",
    karats: "",
    image: "images/Engagement/409-374/H.png"
  },
  {
    style: "409-777",
    name: "Halo Engagement Ring",
    category: "wedding",
    subcategory: "engagement",
    description: "Ring pictured with a 1 carat center stone with 68 accent gems with a total weight of .75 carat giving ring a total weight of 1.75 carats. Can be made for any size center stone. Available in two-tone metals in yellow, white or rose gold.",
    metals: "Gold, Platinum, Two-Tone",
    sizes: "Any center stone size",
    karats: "",
    image: "images/Engagement/409-777/B.png"
  },
  {
    style: "409-912",
    name: "Pear Halo Engagement Ring",
    category: "wedding",
    subcategory: "engagement",
    description: "Ring pictured with a 1 carat pear center stone with 87 accent gems with a total weight of .85 carat giving ring a total weight of 1.85 carats. Can be made for any size center stone.",
    metals: "Gold, Platinum, Two-Tone",
    sizes: "Any center stone size",
    karats: "",
    image: "images/Engagement/409-912/D.png"
  },
  {
    style: "417-681",
    name: "Bezel Set Two-Tone Wedding Band",
    category: "wedding",
    subcategory: "engagement",
    description: "Ring has 5 quarter-carat diamonds in the center with 76 diamonds on the side bands for a total weight of 1.95 carats. Can be made with one metal or a combination of two metals, and adjusted to accommodate stones you may have.",
    metals: "Gold, Platinum, Two-Tone",
    sizes: "",
    karats: "",
    image: "images/Engagement/417-681/A.png"
  },
  {
    style: "847-239",
    name: "Woven Diamond Wedding Band",
    category: "wedding",
    subcategory: "engagement",
    description: "A wide woven wedding band (12 millimeters wide) with 240 diamonds for 1 carat total weight.",
    metals: "Gold, Platinum",
    sizes: "12mm wide",
    karats: "",
    image: "images/Engagement/847-239/A.png"
  },

  // Gents — Rings
  {
    style: "415-821",
    name: "Diagonal Channel Set Diamond Ring",
    category: "gents",
    subcategory: "rings",
    description: "Ring pictured with a .75 carat diamond. Can be made for any gemstones. Adjusted to accommodate stones you may have.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/415-821/E.png"
  },
  {
    style: "419-657",
    name: "Channel Set Diamond Wedding Band",
    category: "gents",
    subcategory: "rings",
    description: "Ring pictured with 5 diamonds for a total weight of .5 carat. Can be made for any gemstones. Adjusted to accommodate stones you may have.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/419-657/A.png"
  },
  {
    style: "420-337",
    name: "Scalloped Solitaire Ring",
    category: "gents",
    subcategory: "rings",
    description: "Ring pictured with a 1 carat diamond. Can be made for any size or type of stone such as birthstone. Adjusted to accommodate stones you may have.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/420-337/B.png"
  },
  {
    style: "554-741",
    name: "Gypsy Solitaire Ring",
    category: "gents",
    subcategory: "rings",
    description: "Ring pictured with a 1 carat diamond. Can be made for any size or type of stone such as birthstone. Adjusted to accommodate stones you may have.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/554-741/A.png"
  },
  {
    style: "671-531",
    name: "Fluted Solitaire Ring",
    category: "gents",
    subcategory: "rings",
    description: "Ring pictured with a 3 carat size stone. Can be made for any size or type of stone such as birthstone. Adjusted to accommodate stones you may have.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/671-531/101.png"
  },
  {
    style: "933-268",
    name: "Trillion Filigree Ring",
    category: "gents",
    subcategory: "rings",
    description: "Ring pictured with a 7.25 millimeter trillion Tsavorite Garnet with 15 diamonds for a total weight of 1.25 carats. Can be made for any size or type of stone. Adjusted to accommodate a stone you may have.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/933-268/A.png"
  },

  // Gents — Pendants
  {
    style: "113-109",
    name: "Blue Whale Fish Hook Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "A Blue Whale Fish Hook Pendant. Pendant measures 2 inches tall and 3/4 inch wide.",
    metals: "",
    sizes: '2" tall \u00d7 3/4" wide',
    karats: "",
    image: "images/Gents_Pendants/113-109/A.png"
  },
  {
    style: "113-110",
    name: "Sperm Whale Fish Hook Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "A Sperm Whale Fish Hook Pendant. Pendant measures 2 inches tall and 1 inch wide.",
    metals: "",
    sizes: '2" tall \u00d7 1" wide',
    karats: "",
    image: "images/Gents_Pendants/113-110/A.png"
  },
  {
    style: "113-554",
    name: "Duck Hunting Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "A pendant for the duck hunting enthusiast. Pendant measures 1.3 inches tall.",
    metals: "",
    sizes: '1.3" tall',
    karats: "",
    image: "images/Gents_Pendants/113-554/101.png"
  },
  {
    style: "114-541",
    name: "Sword Fish Diamond Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "Pendant pictured with 38 diamonds for a total weight of .45 carat. Pendant measures approximately 1.2 inches. Can be made with any gemstone.",
    metals: "",
    sizes: '1.2"',
    karats: "",
    image: "images/Gents_Pendants/114-541/A.png"
  },
  {
    style: "115-704",
    name: "Arrow Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "A pendant for the bow & arrow enthusiast. Pendant measures 1.6 inches tall with the bail and the circumference is .57 inch.",
    metals: "Gold, Silver",
    sizes: '1.6" tall with bail',
    karats: "",
    image: "images/Gents_Pendants/115-704/A.png"
  },

  // Specialty — Professional
  {
    style: "647-333",
    name: "Truck Driving Ring \u2014 Oval Signet",
    category: "specialty",
    subcategory: "professional",
    description: "An oval signet truck driving ring for the trucking professional.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Professional/647-333/A.png"
  },
  {
    style: "647-335",
    name: "Truck Driving Ring \u2014 Square Signet",
    category: "specialty",
    subcategory: "professional",
    description: "A square signet tractor trailer ring for the trucking professional.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Professional/647-335/A.png"
  },
  {
    style: "662-278",
    name: "Truck Driving Ring",
    category: "specialty",
    subcategory: "professional",
    description: "A truck driving ring for the trucking professional.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Professional/662-278/C.png"
  },
  {
    style: "662-279",
    name: "Truck Ring with Diamond Headlights",
    category: "specialty",
    subcategory: "professional",
    description: "A truck driving ring with 2 diamonds for headlights for a total weight of .07 carat.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Professional/662-279/102.png"
  },

  // Specialty — Novelty
  {
    style: "343-261",
    name: "Confederate States Seal Pendant",
    category: "specialty",
    subcategory: "novelty",
    description: "A pendant of the Seal of the Confederate States of America. The seal measures 1 inch in diameter and pendant is 1.37 inches tall with the bail.",
    metals: "",
    sizes: '1" diameter seal, 1.37" tall with bail',
    karats: "",
    image: "images/Novelty/Confederate%20States/A.png"
  },
  {
    style: "343-262",
    name: "Confederate Navy Department Pendant",
    category: "specialty",
    subcategory: "novelty",
    description: "A pendant representing the Confederate States of America Navy Department. The seal measures 1 inch in diameter and pendant is 1.37 inches tall with the bail. The sails and sea are enameled.",
    metals: "",
    sizes: '1" diameter seal, 1.37" tall with bail',
    karats: "",
    image: "images/Novelty/Confederate%20Navy/A.png"
  },
  {
    style: "347-423",
    name: "Gadsden Flag Signet Ring",
    category: "specialty",
    subcategory: "novelty",
    description: "A signet ring with the Gadsden Flag with enamel. Top of ring measures approximately .93 inches by .86 inches.",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Novelty/347-423/A.png"
  },
  {
    style: "347-509",
    name: "Confederate Flag Signet Ring",
    category: "specialty",
    subcategory: "novelty",
    description: "A signet ring with the Confederate States of America Flag with enameled colors. Top of ring measures .98 inches by .7 inches.",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Novelty/347-509/A.png"
  },
  {
    style: "347-812",
    name: "Confederate Seal Round Signet Ring",
    category: "specialty",
    subcategory: "novelty",
    description: "A signet ring with the Seal of the Confederate States of America. The seal measures 18mm (a little less than the size of a quarter).",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Novelty/347-812/101.png"
  },
  {
    style: "347-817",
    name: "Confederate Seal Signet Ring",
    category: "specialty",
    subcategory: "novelty",
    description: "A signet ring with the Seal of the Confederate States of America. The seal measures 18mm (a little smaller than a quarter).",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Novelty/347-817/A.png"
  }
];

const PROCUREMENT_TEXT = "Our website predominately features our own designs and services but we are able to supply any jewelry item, even something you see at other jewelry outlets, usually at very competitive prices.";
