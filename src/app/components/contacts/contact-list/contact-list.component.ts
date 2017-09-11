import {Component, Input, OnInit} from '@angular/core';
import {ContactInterface} from '../../../interfaces/ContactInterface';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
    @Input() contact: ContactInterface;

    constructor() {
    }

}
