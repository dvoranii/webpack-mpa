import "./global.css";
import { renderNav } from "./Components/nav/nav.js";

document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.querySelector("#nav-container");
  renderNav(navContainer);
});
