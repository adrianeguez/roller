import {Component, OnInit} from '@angular/core';
import {ContactClass} from '../../../classes/ContactClass';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
    contact: ContactClass = new ContactClass();

    constructor(private _formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.contact.contactFormGroup = this._formBuilder.group(
            {
                name: [
                    '',
                    Validators.required,
                    Validators.minLength(this.contact.nameValidationMessages.minlength.value),
                    Validators.maxLength(this.contact.nameValidationMessages.maxlength.value)
                ]
                // email: [
                //     '',
                //     Validators.required,
                //     Validators.minLength(this.contact.emailValidationMessages.minlength.value),
                //     Validators.maxLength(this.contact.emailValidationMessages.maxlength.value),
                //     Validators.pattern(this.contact.emailValidationMessages.pattern.value)
                // ],
                // address: [
                //     '',
                //     Validators.minLength(this.contact.addressValidationMessages.minlength.value),
                //     Validators.maxLength(this.contact.addressValidationMessages.maxlength.value),
                // ],
                // phoneNumber: [
                //     '',
                //     Validators.required,
                //     Validators.minLength(this.contact.phoneNumberValidationMessages.minlength.value),
                //     Validators.maxLength(this.contact.phoneNumberValidationMessages.maxlength.value),
                // ]
            }
        )
        const nameControl = this.contact.contactFormGroup.get('name');
        nameControl
            .valueChanges
            .subscribe(
                valueNameControl => {
                    this.setMessagesNameControl(nameControl);
                }
            )
    }

    setMessagesNameControl(nameControl: AbstractControl): void {
        this.contact.nameValidationMessages.validationMessages = [];
        if ((nameControl.touched || nameControl.dirty) && nameControl.errors) {
            this.contact.nameValidationMessages.validationMessages = Object.keys(nameControl.errors)
                .map( key => this.contact.nameValidationMessages[key].text);
        }
        // else {
        //     this.UsuarioAttempt.nombres = this.usuarioForm.get('nombres').value
        //     this.UsuarioValidado.emit(this.UsuarioAttempt)
        // }
    }

    createContact() {
        console.log('Create');
    }

}
