const AFFILIATE_LINK = "https://rzekl.com/g/1e8d1144901fd0641c1f6525dc4e3/".replace("4e3/","4e3/");
// ملاحظة: استبدل الرابط أعلاه بالرابط النهائي من Admitad إذا كان مختلفًا.

const products = [
  {
    id: 1,
    name: "منتج مختار من AliExpress",
    category: "gadgets",
    categoryName: "أدوات ذكية",
    icon: "⚡",
    badge: "اختيار سوقنا",
    description: "منتج مختار كبداية لمتجر سوقنا. اضغط لمعرفة السعر والتفاصيل لدى المتجر الشريك.",
    link: AFFILIATE_LINK
  },
  {
    id: 2,
    name: "إكسسوارات تقنية مختارة",
    category: "electronics",
    categoryName: "إلكترونيات",
    icon: "📱",
    badge: "قريبًا",
    description: "سيتم إضافة منتجات فعلية مختارة بعد تجهيز روابط الأفلييت الخاصة بها.",
    link: "#products"
  },
  {
    id: 3,
    name: "أدوات منزلية عملية",
    category: "home",
    categoryName: "المنزل",
    icon: "🏠",
    badge: "قريبًا",
    description: "مجموعة من المنتجات العملية للمنزل والاستخدام اليومي.",
    link: "#products"
  },
  {
    id: 4,
    name: "إكسسوارات وموضة",
    category: "fashion",
    categoryName: "موضة",
    icon: "👟",
    badge: "قريبًا",
    description: "اختيارات بسيطة وعملية من فئة الموضة والإكسسوارات.",
    link: "#products"
  }
];

const grid = document.getElementById("productsGrid");
const search = document.getElementById("search");
const empty = document.getElementById("empty");
let selectedCategory = "all";

function render() {
  const q = (search?.value || "").trim().toLowerCase();
  const list = products.filter(p =>
    (selectedCategory === "all" || p.category === selectedCategory) &&
    (p.name + " " + p.description + " " + p.categoryName).toLowerCase().includes(q)
  );
  grid.innerHTML = list.map(p => `
    <article class="product">
      <div class="product-media">
        <span class="badge">${p.badge}</span>
        <span aria-hidden="true">${p.icon}</span>
      </div>
      <div class="product-body">
        <span class="product-cat">${p.categoryName}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <a class="btn primary" href="${p.link}" target="_blank" rel="nofollow sponsored noopener">
          ${p.id === 1 ? "شاهد المنتج ↗" : "قريبًا"}
        </a>
      </div>
    </article>
  `).join("");
  empty.classList.toggle("hidden", list.length !== 0);
}

document.querySelectorAll(".cat").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedCategory = btn.dataset.category;
    render();
  });
});
search?.addEventListener("input", render);
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("menuBtn")?.addEventListener("click", () => {
  const nav = document.querySelector(".navlinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "68px";
  nav.style.right = "12px";
  nav.style.left = "12px";
  nav.style.background = "#fff";
  nav.style.padding = "15px";
  nav.style.border = "1px solid #e7eaf0";
  nav.style.borderRadius = "16px";
  nav.style.flexDirection = "column";
});
render();