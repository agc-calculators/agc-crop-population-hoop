/*! Built with http://stenciljs.com */
const{h:t}=window.AgcCropPopulationHoop;import{d as s}from"./chunk-a6c07eb3.js";class a{constructor(){this.socket="",this.ready=!1}render(){return t("section",{"data-wizard-results":!0,ref:t=>this.section=t},t("div",{style:{display:this.ready?"none":"block"}},t("slot",{name:"empty"})),t("div",{style:{display:this.ready?"block":"none"}},this.data&&t("ul",{class:"agc-results"},t("li",null,t("h2",{"data-i18n":"results.stand-count"},"Stand Count"),t("span",{class:"agc-results__value"},s(this.data.standCount)),t("sub",{"data-i18n":"results.plants"},"plants")),t("li",null,t("h2",{"data-i18n":"results.hoop-diameter"},"Hoop Diameter"),t("span",{class:"agc-results__value"},s(this.data.hoopDiameter)),t("sub",{"data-i18n":`results.hoop-diameter-${this.data.units.diameter}`},this.data.units.diameter)))))}handleResults(t){t.detail.socket===this.socket&&(this.data=Object.assign({},t.detail.results),this.ready=!0)}componentDidLoad(){this.socket&&window.document.addEventListener("agcCalculated",this.handleResults.bind(this))}componentDidUnload(){window.document.removeEventListener("agcCalculated",this.handleResults)}static get is(){return"agc-crop-population-hoop-inputs"}static get properties(){return{data:{state:!0},ready:{state:!0},socket:{type:String,attr:"socket"}}}}export{a as AgcCropPopulationHoopInputs};