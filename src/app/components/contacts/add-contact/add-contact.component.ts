import {Component, OnInit} from '@angular/core';
import {ContactClass} from '../../../classes/ContactClass';

@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
    contact: ContactClass = new ContactClass();

    constructor() {
    }

    ngOnInit() {
    }

    createContact() {
        this.contact.loading = true;
    }

}
