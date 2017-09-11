import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment, fire} from './environments/environment';

declare var firebase;

if (environment.production) {
    enableProdMode();
}
fire.app = firebase.initializeApp(environment.firebaseConfig);
fire.db = fire.app.database();
platformBrowserDynamic().bootstrapModule(AppModule);
