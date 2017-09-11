import {Injectable} from '@angular/core';

@Injectable()
export class ObjectToArrayService {

    constructor() {
    }

    exec(object) {
        return Object.keys(object).map((key) => {
            object[key].id = key;
            return object[key];
        });
    }

}
