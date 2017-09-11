// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {FirebaseConfigurationInterface} from '../app/interfaces/FirebaseConfigurationInterface';
import {variable} from '@angular/compiler/src/output/output_ast';

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDBJhQcXoiCnCUvpYeTDtHqJSV9sVjMN3w',
        authDomain: 'address-book-a27b4.firebaseapp.com',
        databaseURL: 'https://address-book-a27b4.firebaseio.com',
        projectId: 'address-book-a27b4',
        storageBucket: 'address-book-a27b4.appspot.com',
        messagingSenderId: '525963784917'
    },

};

export let fire: any = {};
