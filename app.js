const AFFILIATE_LINK = "https://rzekl.com/g/1e8d1144901fd0641c1f6525dc4e3/";
document.querySelectorAll("[data-affiliate]").forEach(a=>{
  a.href=AFFILIATE_LINK;
  a.target="_blank";
  a.rel="nofollow sponsored noopener";
});
const menu=document.getElementById("sideMenu");
document.getElementById("menuBtn")?.addEventListener("click",()=>menu.classList.add("open"));
document.getElementById("closeMenu")?.addEventListener("click",()=>menu.classList.remove("open"));
menu?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));