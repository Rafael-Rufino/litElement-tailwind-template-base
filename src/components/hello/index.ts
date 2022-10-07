import "../../global/styles.css";
import { LitElement, customElement, html } from "lit-element";

@customElement("helloword-app")
class Hello extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }
  render() {
    return html`
      <h1 class="mx-auto my-4 py-4 text-center shadow-lg text-xl w-1/2">
        Hello, World!
      </h1>
    `;
  }
}

export { Hello };
