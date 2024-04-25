import "./nav.css";
import { html, render } from "lit-html";

const navTemplate = html`
  <nav>
    <ul class="nav--list">
      <li class="nav--list__item"><a href="/">Home</a></li>
      <li class="nav--list__item"><a href="/about">About</a></li>
      <li class="nav--list__item"><a href="/contact">Contact</a></li>
      <li class="nav--list__item"><a href="/quote">Quote</a></li>
      <li class="nav--list__item">
        <a href="/service-categories/sporting-goods/">Sports</a>
      </li>
      <li class="nav--list__item">
        <a href="/service-categories/transportation/">Transportation</a>
      </li>
      <li class="nav--list__item">
        <a href="/service-categories/transportation/air/">Air</a>
      </li>
      <li class="nav--list__item">
        <a href="/service-categories/transportation/ocean/">Ocean</a>
      </li>
      <li class="nav--list__item">
        <a href="/service-categories/transportation/truck/">Truck</a>
      </li>
      <li class="nav--list__item">
        <a href="/service-categories/transportation/warehouse/">Warehouse</a>
      </li>
    </ul>
  </nav>
`;

export function renderNav(container) {
  render(navTemplate, container);
}
