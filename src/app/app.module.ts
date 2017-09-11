import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactListComponent} from './components/contacts/contact-list/contact-list.component';
import {AddContactComponent} from './components/contacts/add-contact/add-contact.component';
import {FirebaseService} from './services/firebase.service';
import { NotFoundComponent } from './components/404/not-found/not-found.component';
import {RoutingRollerModule} from './app.routes';
import { RouteHomeComponent } from './routes/route-home/route-home.component';
import {ContactService} from './services/contact.service';
import {ObjectToArrayService} from './services/object-to-array.service';
import { RouteCreateContactComponent } from './routes/route-create-contact/route-create-contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ContactListComponent,
        AddContactComponent,
        NotFoundComponent,
        RouteHomeComponent,
        RouteCreateContactComponent
    ],
    imports: [
        BrowserModule,
        RoutingRollerModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule
    ],
    providers: [
        FirebaseService,
        ContactService,
        ObjectToArrayService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
