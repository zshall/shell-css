import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class ShellDocTheme extends LitElement {
  static properties = {
    name: {type: String},
  };

  createRenderRoot() {
    // disable shadow root so we can use the parent styles
    return this;
  }

  constructor() {
    super();
    this.name = 'default';
  }

  render() {
    return html`
    <div class="theme-${this.name}">
        <div class="desktop d-relative" style="width: 100%; height: 180px;">
            <div class="window d-absolute" style="top: 10px; left: 10px; z-index: 1; width: 80%;">
                <div class="title-bar">Inactive</div>
                <ul class="menu-bar"></ul>
                <div class="p-4"></div>
            </div>
            <div class="window workspace active d-absolute" style="top: 32px; left: 32px; z-index: 2; width: 80%; height: 70%;">
                <div class="title-bar">${this.name}</div>
                <ul class="menu-bar">
                    <li class="menu-item active">
                        File
                        <ul class="menu" style="min-width: 40px;">
                            <div class="menu-item disabled">Disabled</div>
                            <div class="menu-item">Highlighted</div>
                        </ul>
                    </li>
                    <li class="menu-item">Edit</li>
                </ul>
                <div class="container p-0">
                    <div class="row">
                        <div class="offset-5 col-7">
                          <div class="window no-outer-border p-2">
                            <div class="mb-2">Window text</div>
                            <button class="btn">OK</button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  }
}
customElements.define('shell-doc-theme', ShellDocTheme);
