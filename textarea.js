
const template = document.createElement("template");
template.innerHTML = "<style> h2 { color: red; }</style><h2></h2>";

// Custom text area with line numbers and custom cursor
class CustomTextArea extends HTMLElement {
    static get observedAttributes() { 
        return ["msg"]; 
    } 
    constructor() {
        super();
        console.log("Created custom element!");
        // Shadow DOM
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("h2").innerText = this.getAttribute("msg");
    }
}

customElements.define("custom-text-area", CustomTextArea);
console.log("Hello World!");

