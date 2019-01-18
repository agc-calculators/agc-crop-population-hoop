import { numberWithCommas } from '../../utils';
export class AgcCropPopulationHoopInputs {
    constructor() {
        this.socket = "";
        this.ready = false;
    }
    render() {
        return (h("section", { "data-wizard-results": true, ref: c => this.section = c },
            h("div", { style: { display: this.ready ? 'none' : 'block' } },
                h("slot", { name: "empty" })),
            h("div", { style: { display: this.ready ? 'block' : 'none' } }, this.data && (h("ul", { class: "agc-results" },
                h("li", null,
                    h("h2", { "data-i18n": "results.stand-count" }, "Stand Count"),
                    h("span", { class: "agc-results__value" }, numberWithCommas(this.data['standCount'])),
                    h("sub", { "data-i18n": `results.plants` }, "plants")),
                h("li", null,
                    h("h2", { "data-i18n": "results.hoop-diameter" }, "Hoop Diameter"),
                    h("span", { class: "agc-results__value" }, numberWithCommas(this.data['hoopDiameter'])),
                    h("sub", { "data-i18n": `results.hoop-diameter-${this.data['units']['diameter']}` }, this.data['units']['diameter'])))))));
    }
    handleResults(e) {
        if (e.detail['socket'] !== this.socket) {
            return;
        }
        this.data = Object.assign({}, e.detail['results']);
        this.ready = true;
    }
    componentDidLoad() {
        if (!this.socket) {
            return;
        }
        window.document.addEventListener('agcCalculated', this.handleResults.bind(this));
    }
    componentDidUnload() {
        window.document.removeEventListener('agcCalculated', this.handleResults);
    }
    static get is() { return "agc-crop-population-hoop-inputs"; }
    static get properties() { return {
        "data": {
            "state": true
        },
        "ready": {
            "state": true
        },
        "socket": {
            "type": String,
            "attr": "socket"
        }
    }; }
}
