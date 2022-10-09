import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { UnathorizedAccessComponent } from './core/unathorized-access/unathorized-access.component';

const mainPage = 'movimentos-manuais';

const routes: Routes = [
    { path: '', redirectTo: mainPage, pathMatch: 'full' },
    { path: 'unathorized-access', component: UnathorizedAccessComponent },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }