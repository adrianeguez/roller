import {Injectable} from '@angular/core';
import {FirebaseConfigurationInterface} from '../interfaces/FirebaseConfigurationInterface';

declare var firebase;

@Injectable()
export class FirebaseService {
    firebaseApp: any;
    firebaseConfig: FirebaseConfigurationInterface;
    firebaseDefaultDB: any;

    constructor() {
        this.firebaseConfig = {
            apiKey: 'AIzaSyDBJhQcXoiCnCUvpYeTDtHqJSV9sVjMN3w',
            authDomain: 'address-book-a27b4.firebaseapp.com',
            databaseURL: 'https://address-book-a27b4.firebaseio.com',
            projectId: 'address-book-a27b4',
            storageBucket: 'address-book-a27b4.appspot.com',
            messagingSenderId: '525963784917'
        };
        // this.firebaseApp = firebase.initializeApp(this.firebaseConfig);
        // this.firebaseDefaultDB = this.firebaseApp.database();
    }
}
