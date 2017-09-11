import {Component, OnInit} from '@angular/core';
import {ContactClass} from '../../../classes/ContactClass';
import {ContactService} from '../../../services/contact.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.css']
})

export class AddContactComponent {
    contact: ContactClass = new ContactClass();

    constructor(private _contactService: ContactService,
                private _router: Router,
                private _toastr: ToastrService) {
    }

    createContact() {
        this.contact.loading = true;
        const newContact = {
            name: this.contact.name,
            phone_number: this.contact.phone_number,
            address: this.contact.address,
            email: this.contact.email
        }
        this._contactService.createOne()
            .push(newContact, () => {
                // this._toastr.success(`${newContact.name} created successfully.`, `Success.`);
                this.goHome();
            })
    }
    goHome() {
        setTimeout(
            () => {
                window.location.href = '#/home'
            },300
        )
    }

}
