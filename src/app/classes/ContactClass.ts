import {FormGroup} from '@angular/forms';

export class ContactClass {
    nameValidationMessages?: ContactValidationMessagesInterfaz;
    emailValidationMessages?: ContactValidationMessagesInterfaz;
    addressValidationMessages?: ContactValidationMessagesInterfaz;
    phoneNumberValidationMessages?: ContactValidationMessagesInterfaz;
    loading = false;
    valid = false;
    contactFormGroup: FormGroup;
    formMessages: string[];

    constructor(public name?: string,
                public email?: string,
                public address?: string,
                public phone_number?: string) {

        this.nameValidationMessages = {
            required: {
                text: 'A name is required'
            },
            minlength: {
                text: 'Name must contain more than 3 characters',
                value: 3
            },
            maxlength: {
                text: 'Name must contain less than 20 characters.',
                value: 20
            },
            validationMessages: []
        };
        this.emailValidationMessages = {
            required: {
                text: 'An email is required'
            },
            minlength: {
                text: 'Email must contain more than 6 characters.',
                value: 6
            },
            maxlength: {
                text: 'Email must contain less than 50 characters.',
                value: 50
            },
            pattern: {
                text: 'That does not look like an email.',
                value: '^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$'
            },
            validationMessages: []
        };
        this.addressValidationMessages = {
            minlength: {
                text: 'Address must contain more than 7 characters.',
                value: 7
            },
            maxlength: {
                text: 'Address must contain less than 50 characters.',
                value: 50
            },
            validationMessages: []
        };
        this.phoneNumberValidationMessages = {
            required: {
                text: 'A phone number is required.'
            },
            minlength: {
                text: 'Phone number must contain 10 characters.',
                value: 10
            },
            maxlength: {
                text: 'Phone Number must contain 10 characters.',
                value: 10
            },
            validationMessages: []
        };

    }


}

export interface ContactValidationMessagesInterfaz {
    required?: MetaDataValidation;
    minlength?: MetaDataValidation;
    maxlength?: MetaDataValidation;
    pattern?: MetaDataValidation;
    validationMessages: string[];
}

export interface MetaDataValidation {
    text: string;
    value?: any;
}