import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-route-create-contact',
    templateUrl: './route-create-contact.component.html',
    styleUrls: ['./route-create-contact.component.css']
})
export class RouteCreateContactComponent {

    constructor(private _router: Router) {
    }

    goHomeRoute() {
        this._router.navigate(['home']);
    }

}
