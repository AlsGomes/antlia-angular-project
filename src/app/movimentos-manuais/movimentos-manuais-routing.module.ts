import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovimentosManuaisComponent } from './movimentos-manuais/movimentos-manuais.component';

const routes: Routes = [
    { path: 'movimentos-manuais', component: MovimentosManuaisComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class MovimentosManuaisRoutingModule { }