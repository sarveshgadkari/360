/* Product detail page renderer */
(function () {
  const id = new URLSearchParams(location.search).get("id");
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  const yes = '<span class="yes">✓ Yes</span>', no = '<span class="no">✕ No</span>';

  document.title = p.name + " — Hearing 360 Degree";
  document.getElementById("pdpCrumbs").innerHTML =
    'Home / <a href="products.html">Our Products</a> / <a href="products.html?company=' + p.company + '">' + p.company + "</a> / " + p.name;
  document.getElementById("pdpMeta").textContent = p.company + " · " + p.type + (p.tag ? " · " + p.tag : "");
  document.getElementById("pdpName").textContent = p.name;
  document.getElementById("pdpDesc").textContent = p.desc;
  document.getElementById("pdpPrice").innerHTML = "₹" + p.price + ' <small style="font-family:Karla;font-size:.8rem;color:#4B5B52;font-weight:400">(sample price — MRP on request)</small>';

  /* Gallery: main image + 4 thumbs (sample SVG angles) */
  const angles = ["Front view", "Side view", "On the ear", "Charging case"];
  const art = a => '<div class="pdp-art"><div>' + PRODUCT_ICON + '<span>' + a + "</span></div></div>";
  const main = document.getElementById("pdpMain");
  main.innerHTML = art(angles[0]);
  document.getElementById("pdpThumbs").innerHTML = angles.map((a, i) =>
    '<button class="pdp-thumb' + (i === 0 ? " active" : "") + '" data-a="' + a + '">' + PRODUCT_ICON + "</button>").join("");
  document.querySelectorAll(".pdp-thumb").forEach(t => t.addEventListener("click", () => {
    document.querySelectorAll(".pdp-thumb").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    main.innerHTML = art(t.dataset.a);
  }));

  /* Specs */
  const tech = p.tech || "";
  document.getElementById("pdpSpecs").innerHTML =
    "<tr><td>Brand</td><td>" + p.company + "</td></tr>" +
    "<tr><td>Wearing style</td><td>" + p.type + "</td></tr>" +
    "<tr><td>Rechargeable</td><td>" + (tech.includes("rechargeable") ? yes : no) + "</td></tr>" +
    "<tr><td>Bluetooth / mobile streaming</td><td>" + (tech.includes("bluetooth") ? yes : no) + "</td></tr>" +
    "<tr><td>AI sound processing</td><td>" + (tech.includes("ai") ? yes : no) + "</td></tr>" +
    "<tr><td>IP68 water &amp; dust resistance</td><td>" + (tech.includes("ip68") ? yes : no) + "</td></tr>" +
    "<tr><td>Free hearing test &amp; trial</td><td>" + yes + "</td></tr>" +
    "<tr><td>After-sales service &amp; programming</td><td>" + yes + "</td></tr>";

  document.getElementById("pdpEnquire").addEventListener("click", () => openInquiry(p.name));
  const dl = document.getElementById("pdpDownload");
  dl.setAttribute("data-download", p.name);

  /* Related products: same brand first, then others */
  const rel = PRODUCTS.filter(x => x.id !== p.id && x.company === p.company)
    .concat(PRODUCTS.filter(x => x.id !== p.id && x.company !== p.company)).slice(0, 3);
  document.getElementById("relTitle").textContent = "More from " + p.company;
  document.getElementById("relatedGrid").innerHTML = rel.map(productCard).join("");
})();
