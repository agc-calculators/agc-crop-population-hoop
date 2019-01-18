/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface AgcCropPopulationHoopInputs {
    'socket': string;
  }
  interface AgcCropPopulationHoopInputsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcCropPopulationHoopProgress {
    'socket': string;
  }
  interface AgcCropPopulationHoopProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcCropPopulationHoopResultsPlaceholder {}
  interface AgcCropPopulationHoopResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcCropPopulationHoopResults {
    'socket': string;
  }
  interface AgcCropPopulationHoopResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcCropPopulationHoop {
    'mode': 'full' | 'step';
    'socket': string;
    'tract': string;
    'units': any;
  }
  interface AgcCropPopulationHoopAttributes extends StencilHTMLAttributes {
    'mode'?: 'full' | 'step';
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
    'units'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcCropPopulationHoopInputs': Components.AgcCropPopulationHoopInputs;
    'AgcCropPopulationHoopProgress': Components.AgcCropPopulationHoopProgress;
    'AgcCropPopulationHoopResultsPlaceholder': Components.AgcCropPopulationHoopResultsPlaceholder;
    'AgcCropPopulationHoopResults': Components.AgcCropPopulationHoopResults;
    'AgcCropPopulationHoop': Components.AgcCropPopulationHoop;
  }

  interface StencilIntrinsicElements {
    'agc-crop-population-hoop-inputs': Components.AgcCropPopulationHoopInputsAttributes;
    'agc-crop-population-hoop-progress': Components.AgcCropPopulationHoopProgressAttributes;
    'agc-crop-population-hoop-results-placeholder': Components.AgcCropPopulationHoopResultsPlaceholderAttributes;
    'agc-crop-population-hoop-results': Components.AgcCropPopulationHoopResultsAttributes;
    'agc-crop-population-hoop': Components.AgcCropPopulationHoopAttributes;
  }


  interface HTMLAgcCropPopulationHoopInputsElement extends Components.AgcCropPopulationHoopInputs, HTMLStencilElement {}
  var HTMLAgcCropPopulationHoopInputsElement: {
    prototype: HTMLAgcCropPopulationHoopInputsElement;
    new (): HTMLAgcCropPopulationHoopInputsElement;
  };

  interface HTMLAgcCropPopulationHoopProgressElement extends Components.AgcCropPopulationHoopProgress, HTMLStencilElement {}
  var HTMLAgcCropPopulationHoopProgressElement: {
    prototype: HTMLAgcCropPopulationHoopProgressElement;
    new (): HTMLAgcCropPopulationHoopProgressElement;
  };

  interface HTMLAgcCropPopulationHoopResultsPlaceholderElement extends Components.AgcCropPopulationHoopResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcCropPopulationHoopResultsPlaceholderElement: {
    prototype: HTMLAgcCropPopulationHoopResultsPlaceholderElement;
    new (): HTMLAgcCropPopulationHoopResultsPlaceholderElement;
  };

  interface HTMLAgcCropPopulationHoopResultsElement extends Components.AgcCropPopulationHoopResults, HTMLStencilElement {}
  var HTMLAgcCropPopulationHoopResultsElement: {
    prototype: HTMLAgcCropPopulationHoopResultsElement;
    new (): HTMLAgcCropPopulationHoopResultsElement;
  };

  interface HTMLAgcCropPopulationHoopElement extends Components.AgcCropPopulationHoop, HTMLStencilElement {}
  var HTMLAgcCropPopulationHoopElement: {
    prototype: HTMLAgcCropPopulationHoopElement;
    new (): HTMLAgcCropPopulationHoopElement;
  };

  interface HTMLElementTagNameMap {
    'agc-crop-population-hoop-inputs': HTMLAgcCropPopulationHoopInputsElement
    'agc-crop-population-hoop-progress': HTMLAgcCropPopulationHoopProgressElement
    'agc-crop-population-hoop-results-placeholder': HTMLAgcCropPopulationHoopResultsPlaceholderElement
    'agc-crop-population-hoop-results': HTMLAgcCropPopulationHoopResultsElement
    'agc-crop-population-hoop': HTMLAgcCropPopulationHoopElement
  }

  interface ElementTagNameMap {
    'agc-crop-population-hoop-inputs': HTMLAgcCropPopulationHoopInputsElement;
    'agc-crop-population-hoop-progress': HTMLAgcCropPopulationHoopProgressElement;
    'agc-crop-population-hoop-results-placeholder': HTMLAgcCropPopulationHoopResultsPlaceholderElement;
    'agc-crop-population-hoop-results': HTMLAgcCropPopulationHoopResultsElement;
    'agc-crop-population-hoop': HTMLAgcCropPopulationHoopElement;
  }


}
