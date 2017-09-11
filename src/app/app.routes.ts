import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './components/404/not-found/not-found.component';
import {RouteHomeComponent} from './routes/route-home/route-home.component';
import {RouteCreateContactComponent} from './routes/route-create-contact/route-create-contact.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'home', component: RouteHomeComponent},
    {path: 'createContact', component: RouteCreateContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: 'not-found'}
]

export const RoutingRollerModule = RouterModule.forRoot(routes, {useHash: true});