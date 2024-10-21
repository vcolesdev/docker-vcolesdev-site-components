const html = (selector: string) => document.querySelectorAll(selector);

const elements = {
  mobileMenu: {
    html: html("#mobileMenu"),
    selector: "#mobileMenu",
  },
  mobileMenuLink: {
    html: html(".mobile-menu-link"),
    selector: ".mobile-menu-link",
  },
  mobileMenuLogo: {
    html: html("#logoMobileMenu"),
    selector: "#logoMobileMenu",
  },
  nav: {
    html: html(".nav-container"),
    selector: ".nav-container",
  },
  navItem: {
    html: html(".nav-item"),
    selector: ".nav-item",
  },
  overlay: {
    html: html(".site-overlay"),
    selector: ".site-overlay",
  },
};

export { elements };
