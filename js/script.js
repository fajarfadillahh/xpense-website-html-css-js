//===== SHOW HEADER MENU =====
const showMenu = (menuId, toggleId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("nav-menu", "nav-toggle");

//===== NAV-LINK ACTIVE =====
const navLink = document.querySelectorAll(".nav__link");
function linkActive() {
  navLink.forEach((e) => e.classList.remove("link-active"));
  this.classList.add("link-active");
}
navLink.forEach((e) => e.addEventListener("click", linkActive));

//===== STICKY HEADER SECTION =====
const scrollY = window.pageYOffset;
function scrollActive() {
  const header = document.getElementById("header");

  this.scrollY >= 10
    ? header.classList.add("scroll-active")
    : header.classList.remove("scroll-active");
}
window.addEventListener("scroll", scrollActive);
