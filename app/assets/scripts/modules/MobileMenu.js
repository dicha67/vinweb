class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".menu-icon");
    this.menuContent = document.querySelector(".header__menu-content");
    this.menuNav = document.querySelector(".header__menu-nav");

    this.events();
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle("header__menu-content--is-visible");
    this.menuNav.classList.toggle("header__menu-nav--is-visible");
  }
}

export default MobileMenu;
