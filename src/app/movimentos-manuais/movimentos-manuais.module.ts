import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';

import { MovimentosManuaisRoutingModule } from './movimentos-manuais-routing.module';
import { MovimentosManuaisComponent } from './movimentos-manuais/movimentos-manuais.component';

@NgModule({
  declarations: [
    MovimentosManuaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputNumberModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,

    MovimentosManuaisRoutingModule
  ]
})
export class MovimentosManuaisModule { }
