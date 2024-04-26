import "./mobileNav.css";
import { html, render } from "lit-html";

const mobileNavTemplate = html`
  <nav class="mobile-nav">
    <ul class="nav--list__mobile">
      <li class="nav--list__item--mobile"><a href="/">Home</a></li>
      <li class="nav--list__item--mobile"><a href="/about">About</a></li>
      <li class="nav--list__item--mobile dropdown">
        <a href="#">Services</a>
        <ul class="dropdown-content">
          <li>
            <a href="/service-categories/sporting-goods/"
              >Sporting&nbsp;Goods</a
            >
          </li>
          <li class="dropdown">
            <a href="/service-categories/transportation/">Transportation</a>
            <ul class="dropdown--submenu">
              <li>
                <a href="/service-categories/transportation/air/">• Air</a>
              </li>
              <li>
                <a href="/service-categories/transportation/ocean/">• Ocean</a>
              </li>
              <li>
                <a href="/service-categories/transportation/truck/">• Truck</a>
              </li>
              <li>
                <a href="/service-categories/transportation/warehouse/"
                  >• Warehouse</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav--list__item dropdown">
        <a href="#">Contact</a>
        <ul class="dropdown-content">
          <li><a href="/contact/contact-on">Ontario&nbsp;Office</a></li>
          <li><a href="/contact/contact-qc">Quebec&nbsp;Office</a></li>
        </ul>
      </li>
      <li class="nav--list__item"><a href="/quote">Quote</a></li>
    </ul>
  </nav>
`;
