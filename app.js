const AFFILIATE_LINK = "https://rzekl.com/g/1e8d1144901fd0641c1f6525dc4e3/";
// ملاحظة مهمة: استبدل الرابط أعلاه برابط Admitad النهائي لكل منتج عند إضافة المنتجات الحقيقية.

const products = [
  {
    id: 1,
    name: "منتج مختار من AliExpress",
    category: "gadgets",
    categoryName: "أدوات ذكية",
    icon: "⌚",
    badge: "اختيار اليوم",
    description: "بطاقة منتج بتصميم فاخر وجذاب. سنستبدلها لاحقًا بمنتج حقيقي وصورة ورابط Admitad خاص.",
    link: AFFILIATE_LINK
  },
  {
    id: 2,
    name: "إكسسوارات تقنية رائجة",
    category: "electronics",
    categoryName: "إلكترونيات",
    icon: "🎧",
    badge: "رائج",
    description: "قسم مناسب لسماعات، شواحن، كابلات واكسسوارات هاتف مطلوبة بكثرة.",
    link: "#products"
  },
  {
    id: 3,
    name: "أدوات منزلية عملية",
    category: "home",
    categoryName: "المنزل",
    icon: "💡",
    badge: "للمنزل",
    description: "منتجات عملية تسهّل الحياة اليومية ويمكن تسويقها بسهولة للمتسوق العربي.",
    link: "#products"
  },
  {
    id: 4,
    name: "إكسسوارات وأناقة",
    category: "fashion",
    categoryName: "موضة",
    icon: "👜",
    badge: "ستايل",
    description: "مساحة لمنتجات الموضة والاكسسوارات التي تعتمد على الصورة الجذابة والسعر المناسب.",
    link: "#products"
  }
];

const grid = document.getElementById("productsGrid");
const search = document.getElementById("search");
const empty = document.getElementById("empty");
let selectedCategory = "all";

function render() {
  if (!grid) return;
  const q = (search?.value || "").trim().toLowerCase();
  const list = products.filter(p =>
    (selectedCategory === "all" || p.category === selectedCategory) &&
    (p.name + " " + p.description + " " + p.categoryName).toLowerCase().includes(q)
  );

  grid.innerHTML = list.map(p => `
    <article class="product">
      <div class="product-media">
        <span class="badge">${p.badge}</span>
        <span class="product-icon" aria-hidden="true">${p.icon}</span>
      </div>
      <div class="product-body">
        <span class="product-cat">${p.categoryName}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-footer">
          <span class="price-note">السعر النهائي داخل المتجر</span>
          <a class="btn primary" href="${p.link}" target="_blank" rel="nofollow sponsored noopener">
            ${p.id === 1 ? "شاهد المنتج ↗" : "قريبًا"}
          </a>
        </div>
      </div>
    </article>
  `).join("");
  empty?.classList.toggle("hidden", list.length !== 0);
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
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

document.getElementById("menuBtn")?.addEventListener("click", () => {
  const nav = document.getElementById("navLinks");
  if (!nav) return;
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.display = "flex";
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.right = "12px";
    nav.style.left = "12px";
    nav.style.background = "#fffaf0";
    nav.style.padding = "16px";
    nav.style.border = "1px solid #e7dfd0";
    nav.style.borderRadius = "20px";
    nav.style.flexDirection = "column";
    nav.style.boxShadow = "0 22px 70px rgba(8,17,31,.13)";
  } else {
    nav.removeAttribute("style");
  }
});

render();
