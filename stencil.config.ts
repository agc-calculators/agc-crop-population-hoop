import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'agc-crop-population-hoop',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: 'src/globals/app.css'
};

