// روابط Admitad الحقيقية توضع هنا بعد إنشائها من حسابك.
// المفتاح هو رقم المنتج الظاهر في data-product-id داخل index.html.
const AFFILIATE_LINKS = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: ""
};

document.querySelectorAll("[data-affiliate]").forEach(a => {
  const id = a.dataset.productId;
  const link = AFFILIATE_LINKS[id];
  if (link) {
    a.href = link;
    a.target = "_blank";
    a.rel = "nofollow sponsored noopener";
  } else {
    a.addEventListener("click", e => {
      e.preventDefault();
      alert("سيتم تفعيل رابط هذا المنتج بعد إضافة رابط Admitad.");
    });
  }
});

const menu=document.getElementById("sideMenu");
document.getElementById("menuBtn")?.addEventListener("click",()=>menu.classList.add("open"));
document.getElementById("closeMenu")?.addEventListener("click",()=>menu.classList.remove("open"));
menu?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
