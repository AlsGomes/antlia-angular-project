import { ProdutosCosifModule } from './../produtos-cosif/produtos-cosif.module';
import { ProdutosCosifService } from './../produtos-cosif/produtos-cosif.service';
import { ProdutosService } from './../produtos/produtos.service';
import { ProdutosModule } from './../produtos/produtos.module';
import { MovimentosManuaisService } from './../movimentos-manuais/movimentos-manuais.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MovimentosManuaisModule } from './../movimentos-manuais/movimentos-manuais.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnathorizedAccessComponent } from './unathorized-access/unathorized-access.component';

@NgModule({
  declarations: [
    UnathorizedAccessComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    MovimentosManuaisModule,
    ProdutosModule,
    ProdutosCosifModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    HttpClient,

    MovimentosManuaisService,
    ProdutosService,
    ProdutosCosifService
  ]
})
export class CoreModule { }
