import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig) ////Which Componenent to load, which config to load.
  .catch((err) => console.error(err));
