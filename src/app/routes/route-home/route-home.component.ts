import {Component, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {ObjectToArrayService} from '../../services/object-to-array.service';

@Component({
    selector: 'app-route-home',
    templateUrl: './route-home.component.html',
    styleUrls: ['./route-home.component.css']
})
export class RouteHomeComponent implements OnInit {
    contacts: any = [];

    constructor(private _contactService: ContactService,
                private _objectToArrayService: ObjectToArrayService) {
    }

    ngOnInit() {
        this._contactService.getAll()
            .then(
                data => {
                    const contactsObject = data.val();
                    this.contacts = this._objectToArrayService.exec(contactsObject);
                }
            )
    }

}
