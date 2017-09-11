import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactListComponent} from './components/contacts/contact-list/contact-list.component';
import {AddContactComponent} from './components/contacts/add-contact/add-contact.component';
import {FirebaseService} from './services/firebase.service';
import { NotFoundComponent } from './components/404/not-found/not-found.component';
import {RoutingRollerModule} from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        ContactListComponent,
        AddContactComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        RoutingRollerModule
    ],
    providers: [
        FirebaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
