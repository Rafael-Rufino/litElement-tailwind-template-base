import "../../global/styles.css";
import { LitElement } from "lit-element";
declare class Button extends LitElement {
    createRenderRoot(): this;
    name: string;
    onClick: (event: CustomEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    render(): import("lit-html").TemplateResult<1>;
}
export { Button };
