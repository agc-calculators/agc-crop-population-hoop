/*! Built with http://stenciljs.com */
import{h}from"../agc-crop-population-hoop.core.js";import{d as numberWithCommas}from"./chunk-a6c07eb3.js";var AgcCropPopulationHoopInputs=function(){function t(){this.socket="",this.ready=!1}return t.prototype.render=function(){var t=this;return h("section",{"data-wizard-results":!0,ref:function(e){return t.section=e}},h("div",{style:{display:this.ready?"none":"block"}},h("slot",{name:"empty"})),h("div",{style:{display:this.ready?"block":"none"}},this.data&&h("ul",{class:"agc-results"},h("li",null,h("h2",{"data-i18n":"results.stand-count"},"Stand Count"),h("span",{class:"agc-results__value"},numberWithCommas(this.data.standCount)),h("sub",{"data-i18n":"results.plants"},"plants")),h("li",null,h("h2",{"data-i18n":"results.hoop-diameter"},"Hoop Diameter"),h("span",{class:"agc-results__value"},numberWithCommas(this.data.hoopDiameter)),h("sub",{"data-i18n":"results.hoop-diameter-"+this.data.units.diameter},this.data.units.diameter)))))},t.prototype.handleResults=function(t){t.detail.socket===this.socket&&(this.data=Object.assign({},t.detail.results),this.ready=!0)},t.prototype.componentDidLoad=function(){this.socket&&window.document.addEventListener("agcCalculated",this.handleResults.bind(this))},t.prototype.componentDidUnload=function(){window.document.removeEventListener("agcCalculated",this.handleResults)},Object.defineProperty(t,"is",{get:function(){return"agc-crop-population-hoop-inputs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{data:{state:!0},ready:{state:!0},socket:{type:String,attr:"socket"}}},enumerable:!0,configurable:!0}),t}();export{AgcCropPopulationHoopInputs};