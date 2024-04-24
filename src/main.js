import "./global.css";
import { renderNav } from "./Components/nav/nav.js";
import { renderFooter } from "./Components/footer/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.querySelector("#nav-container");
  renderNav(navContainer);

  const footerContainer = document.querySelector("#footer-container");
  renderFooter(footerContainer);
});
