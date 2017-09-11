import {Injectable} from '@angular/core';
import {FirebaseService} from './firebase.service';

@Injectable()
export class ContactService {
    model = '/contacts';

    constructor(private _firebaseService: FirebaseService) {
    }

    getAll() {
        return this._firebaseService.firebaseDefaultDB.ref(this.model).once('value');
    }

    getOne(id: string) {
        return this._firebaseService.firebaseDefaultDB.ref(this.model + `/${id}`).once('value');
    }


}
