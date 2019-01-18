
// AgcCropPopulationHoop: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-crop-population-hoop.core.js';
import {
  AgcCropPopulationHoop,
  AgcCropPopulationHoopInputs,
  AgcCropPopulationHoopProgress,
  AgcCropPopulationHoopResults,
  AgcCropPopulationHoopResultsPlaceholder
} from './agc-crop-population-hoop.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcCropPopulationHoop,
    AgcCropPopulationHoopInputs,
    AgcCropPopulationHoopProgress,
    AgcCropPopulationHoopResults,
    AgcCropPopulationHoopResultsPlaceholder
  ], opts);
}
