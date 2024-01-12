import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class ShellDocIceCreamForm extends LitElement {
  createRenderRoot() {
    // disable shadow root so we can use the parent styles
    return this;
  }

  constructor() {
    super();
    this.sundae = 'vanilla';
    this.scoops = 1;
    this.toppings = ['chocolate sauce', 'nuts'];
    this.flavor = 'banana';
  }

  render() {
    return html`
    <div class="row">
        <div class="col-lg-4">
            <div class="callout mb-3">
                <div>
                    <p class="stylized-initial-letter">Use the sample dialog box to build an
                        ice cream sundae.</p>
                    <p>Experiment with the different sundae selections. As you make
                        selections, the calorie count for the sundae increases or decreases.
                    </p>
                    <p>You can learn about the form controls on display here by inspecting
                        element.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="row">
                <div class="col-12">
                    <div class="frame">
                        <div class="progress-bar mb-2">
                            <div class="progress-bar-progress" style="width: 10%"></div>
                        </div>
                        <div class="text-center">310 Calories</div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="frame">
                        <div class="frame-title">Sundae</div>
                        <div class="form-group">
                            <label class="form-control" for="sundae1">
                                <input type="radio" name="sundae" id="sundae1" value="1"
                                    checked>
                                <span class="option-text">Vanilla</span>
                            </label>

                            <label class="form-control" for="sundae2">
                                <input type="radio" name="sundae" id="sundae2" value="2">
                                <span class="option-text">Chocolate</span>
                            </label>

                            <label class="form-control" for="sundae3">
                                <input type="radio" name="sundae" id="sundae3" value="3">
                                <span class="option-text">Strawberry</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="frame">
                        <div class="frame-title">Amount</div>
                        <label class="form-control" for="amount">
                            <input type="number" min="1" max="10" value="1" id="amount"
                                style="width: 35px;" />
                            Scoops
                        </label>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="frame">
                        <div class="frame-title">Toppings</div>
                        <div class="form-group">
                            <label class="form-control" for="toppings1">
                                <input type="checkbox" name="toppings" id="toppings1"
                                    value="1" checked>
                                <span class="option-text">Chocolate Sauce</span>
                            </label>

                            <label class="form-control" for="toppings2">
                                <input type="checkbox" name="toppings" id="toppings2"
                                    value="2">
                                <span class="option-text">Nuts</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="frame">
                        <div class="frame-title">Flavor</div>
                        <div class="select-input">
                            <select name="flavor" id="flavor">
                                <option value="1">Banana</option>
                                <option value="2">Blueberry</option>
                                <option value="3">Chocolate</option>
                                <option value="4">Coconut</option>
                                <option value="5">Coffee</option>
                                <option value="6">Lemon</option>
                                <option value="7">Maple</option>
                                <option value="8">Mint</option>
                                <option value="9">Peach</option>
                                <option value="10">Pistachio</option>
                                <option value="11">Strawberry</option>
                                <option value="12">Vanilla</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  }
}
customElements.define('shell-doc-ice-cream-form', ShellDocIceCreamForm);
