import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class ShellDocColorTable extends LitElement {
    static properties = {
        dithered: {type: Boolean},
        noTitle: {type: Boolean},
    };
    createRenderRoot() {
        // disable shadow root so we can use the parent styles
        return this;
    }
    constructor() {
        super();
        this.dithered = false;
    }
    render() {
        const paletteClass = this.dithered ? 'd' : 'r';
        const title = this.noTitle ? '' : html`<h1>${this.dithered ? 'Dithered' : 'RGB Color'}</h1>`;
        return html`
        ${title}
        Basic Colors:
        <table>
            <tr>
                <th></th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th>E</th>
                <th>F</th>
                <th>G</th>
                <th>H</th>
            </tr>
            <tr>
                <th>1</th>
                <td>
                    <div class="color-box bg-A1${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-B1${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-C1${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-D1${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-E1${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-F1${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-G1${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-H1${paletteClass}"></div>
                </td>
            </tr>
            <tr>
                <th>2</th>
                <td>
                    <div class="color-box bg-A2${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-B2${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-C2${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-D2${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-E2${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-F2${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-G2${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-H2${paletteClass}"></div>
                </td>
            </tr>
            <tr>
                <th>3</th>
                <td>
                    <div class="color-box bg-A3${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-B3${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-C3${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-D3${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-E3${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-F3${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-G3${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-H3${paletteClass}"></div>
                </td>
            </tr>
            <tr>
                <th>4</th>
                <td>
                    <div class="color-box bg-A4${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-B4${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-C4${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-D4${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-E4${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-F4${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-G4${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-H4${paletteClass}"></div>
                </td>
            </tr>
            <tr>
                <th>5</th>
                <td>
                    <div class="color-box bg-A5${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-B5${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-C5${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-D5${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-E5${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-F5${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-G5${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-H5${paletteClass}"></div>
                </td>
            </tr>
            <tr>
                <th>6</th>
                <td>
                    <div class="color-box bg-A6${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-B6${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-C6${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-D6${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-E6${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-F6${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-G6${paletteClass}"></div>
                </td>
                <td>
                    <div class="color-box bg-H6${paletteClass}"></div>
                </td>
            </tr>
        </table>`;
    }
}
customElements.define('shell-doc-color-table', ShellDocColorTable);