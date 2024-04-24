import "./footer.css";
import { html, render } from "lit-html";

const footerTemplate = html`
  <footer>
    <p>© 2021 Example Company</p>
  </footer>
`;

export function renderFooter(container) {
  render(footerTemplate, container);
}
