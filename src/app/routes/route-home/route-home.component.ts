import {Component, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {ObjectToArrayService} from '../../services/object-to-array.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-route-home',
    templateUrl: './route-home.component.html',
    styleUrls: ['./route-home.component.css']
})
export class RouteHomeComponent implements OnInit {
    contacts: any = [];

    constructor(private _contactService: ContactService,
                private _objectToArrayService: ObjectToArrayService,
                private _router: Router,
                private _toastr: ToastrService) {
    }

    ngOnInit() {
        this._contactService.getAll()
            .then(
                data => {
                    const contactsObject = data.val();
                    this.contacts = this._objectToArrayService.exec(contactsObject);
                    if (this.contacts.length > 0) {
                        this._toastr.info(`${this.contacts.length} contacts retrieved.`, `Success.`);
                    }
                }
            )
    }

    goCreateContactRoute() {
        this._router.navigate(['createContact']);
    }

}
