import {Injectable} from '@angular/core';
import {FirebaseService} from './firebase.service';
import {fire} from '../../environments/environment';

@Injectable()
export class ContactService {
    model = '/contacts';

    constructor(private _firebaseService: FirebaseService) {
    }

    getAll() {
        return fire.db.ref(this.model).once('value');
    }

    getOne(id: string) {
        return fire.db.ref(this.model + `/${id}`).once('value');
    }


}
