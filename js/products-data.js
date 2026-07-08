/* Hearing 360 Degree — product catalogue (SAMPLE DATA for design approval)
   Single source of truth: powers the listing page, brand pages and product
   detail pages. Later e-commerce conversion = swap this for a live API/DB. */
const PRODUCTS = [
  { id:"signia-pure-charge-go-ix", name:"Signia Pure Charge&Go IX", company:"Signia", type:"RITE", tech:"rechargeable,bluetooth,ai", price:"49,990", tag:"Best Seller",
    desc:"Rechargeable RITE with AI sound processing and direct mobile streaming for effortless conversations in every environment." },
  { id:"signia-silk-ix", name:"Signia Silk IX", company:"Signia", type:"CIC", tech:"bluetooth,ai", price:"39,990", tag:"Discreet",
    desc:"Ready-to-wear completely-in-canal — nearly invisible, instant fit with soft silicone sleeves." },
  { id:"phonak-audeo-lumity", name:"Phonak Audeo Lumity", company:"Phonak", type:"RITE", tech:"rechargeable,bluetooth,ip68", price:"54,990", tag:"Popular",
    desc:"Universal Bluetooth connectivity with SmartSpeech technology for better speech understanding." },
  { id:"phonak-naida-power-bte", name:"Phonak Naida Power BTE", company:"Phonak", type:"BTE", tech:"rechargeable,ip68", price:"44,990", tag:"",
    desc:"Powerful BTE for severe to profound hearing loss. IP68 rated for water and dust resistance." },
  { id:"resound-nexia", name:"ReSound Nexia", company:"ReSound", type:"RITE", tech:"rechargeable,bluetooth,ai", price:"52,490", tag:"New",
    desc:"Next-generation hearing in noise with Bluetooth LE Audio and Auracast broadcast support." },
  { id:"resound-key-ite", name:"ReSound Key ITE", company:"ReSound", type:"ITE", tech:"rechargeable", price:"29,990", tag:"",
    desc:"Custom in-the-ear comfort with easy handling — great everyday value." },
  { id:"starkey-genesis-ai", name:"Starkey Genesis AI", company:"Starkey", type:"RITE", tech:"rechargeable,bluetooth,ai,ip68", price:"59,990", tag:"AI Powered",
    desc:"Industry-leading AI processor with built-in health and fall-detection sensors." },
  { id:"starkey-picasso-cic", name:"Starkey Picasso CIC", company:"Starkey", type:"CIC", tech:"bluetooth", price:"34,990", tag:"",
    desc:"Custom completely-in-canal device with pristine, personalized sound." },
  { id:"coselgi-meya-bte", name:"Coselgi Meya BTE", company:"Coselgi", type:"BTE", tech:"rechargeable", price:"19,990", tag:"Value",
    desc:"Reliable, budget-friendly BTE with clear digital sound quality." },
  { id:"coselgi-wave-itc", name:"Coselgi Wave ITC", company:"Coselgi", type:"ITC", tech:"", price:"16,990", tag:"",
    desc:"Discreet in-the-canal digital hearing aid at an accessible price point." },
  { id:"signia-motion-x-bte", name:"Signia Motion X BTE", company:"Signia", type:"BTE", tech:"rechargeable,bluetooth,ip68", price:"42,990", tag:"",
    desc:"Robust BTE with Android connectivity and direct mobile streaming." },
  { id:"battery-pack-312", name:"Hearing Aid Battery Pack (Size 312)", company:"Accessories", type:"Accessory", tech:"", price:"499", tag:"In Stock",
    desc:"Genuine zinc-air batteries, pack of 6 — suitable for most RITE and ITC models." }
];

const BRAND_INFO = {
  Signia:      "German engineering focused on speech clarity and iconic design — one of the world's leading hearing aid brands.",
  Phonak:      "Swiss hearing technology pioneer known for universal connectivity and powerful solutions for every degree of loss.",
  ReSound:     "Danish innovator behind Bluetooth LE Audio hearing — natural, organic sound powered by smart apps.",
  Starkey:     "American brand leading in AI-powered hearing aids with built-in health and activity tracking.",
  Coselgi:     "Quality digital hearing at accessible prices — part of the WS Audiology family.",
  Accessories: "Genuine batteries, cleaning kits, dryers and care essentials for every hearing aid model."
};

const PRODUCT_ICON = '<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#0E5E3A" stroke-width="1.4"><path d="M6 18V9a6 6 0 1112 0c0 4-3 4-3 8a3 3 0 01-6 0"/><circle cx="12" cy="9" r="2.5" stroke="#F7B718"/></svg>';

function productCard(p){
  return `
  <div class="product-card reveal in" data-company="${p.company}" data-type="${p.type}" data-tech="${p.tech}">
    <a class="product-media" href="product.html?id=${p.id}" aria-label="${p.name} details">
      ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}${PRODUCT_ICON}
    </a>
    <div class="product-body">
      <span class="meta">${p.company} · ${p.type}</span>
      <h3><a href="product.html?id=${p.id}" class="qv-title">${p.name}</a></h3>
      <p class="desc">${p.desc}</p>
      <div class="price">₹${p.price} <small>(sample price — MRP on request)</small></div>
      <div class="product-actions">
        <a class="btn btn-primary btn-sm" href="product.html?id=${p.id}">View Details</a>
        <button class="btn btn-outline btn-sm" data-download="${p.name}">Download Brochure</button>
        <button class="btn btn-yellow btn-sm" data-inquiry="${p.name}">Enquire Now</button>
      </div>
    </div>
  </div>`;
}
