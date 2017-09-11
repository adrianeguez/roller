import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './components/404/not-found/not-found.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'not-found', component: NotFoundComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: 'not-found'}
]

export const RoutingRollerModule = RouterModule.forRoot(routes, {useHash: true});