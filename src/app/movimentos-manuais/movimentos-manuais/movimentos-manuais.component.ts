import { Component, OnInit } from '@angular/core';

import { MovimentoManual, Produto, ProdutoCosif } from './../../core/model';
import { ProdutosCosifService } from './../../produtos-cosif/produtos-cosif.service';
import { ProdutosService } from './../../produtos/produtos.service';
import { MovimentosManuaisService } from './../movimentos-manuais.service';

@Component({
  selector: 'app-movimentos-manuais',
  templateUrl: './movimentos-manuais.component.html',
  styleUrls: ['./movimentos-manuais.component.css']
})
export class MovimentosManuaisComponent implements OnInit {

  mes?: number;
  ano?: number;
  valor?: number;
  produtos: Produto[] = [];
  produtoSelecionado?: Produto;
  cosifs: ProdutoCosif[] = [];
  cosifSelecionado?: ProdutoCosif;
  descricao?: string;
  movimentos: MovimentoManual[] = [];

  camposBloqueados: boolean = true;

  mesPesquisa?: number;
  anoPesquisa?: number;

  constructor(
    private movimentosService: MovimentosManuaisService,
    private produtosService: ProdutosService,
    private produtosCosifService: ProdutosCosifService,
  ) { }

  ngOnInit(): void {
    this.fetchProdutos();

    const mesAtual = new Date().getMonth() + 1
    const anoAtual = new Date().getFullYear()
    this.fetchMovimentos(mesAtual, anoAtual);
  }

  async fetchMovimentos(mes: number, ano: number) {
    const res = await this.movimentosService.fetchMovimentos(mes, ano);
    this.movimentos = res;
  }

  async fetchProdutos() {
    const res = await this.produtosService.fetchProdutos();
    this.produtos = res;
  }

  async fetchProdutosCosif() {
    const res = await this.produtosCosifService.fetchProdutosCosif(this.produtoSelecionado?.codigo!);
    res.forEach(cosif => cosif.label = cosif.codigoCosif + ' - (' + cosif.codigoClassificacao + ')')
    this.cosifs = res;
  }

  limparForm(form: any) {
    this.voltarFormAoPadrao(form)
  }

  prepararNovoMovimento() {
    this.camposBloqueados = false
  }

  async salvarMovimento(form: any) {
    const novoMovimento = {
      mes: this.mes,
      ano: this.ano,
      codigoProduto: this.produtoSelecionado?.codigo,
      codigoCosif: this.cosifSelecionado?.codigoCosif,
      valor: this.valor,
      descricao: this.descricao
    }

    await this.movimentosService.create(novoMovimento);

    this.fetchMovimentos(this.mes!, this.ano!)
    this.voltarFormAoPadrao(form)
  }

  voltarFormAoPadrao(form: any) {
    form.reset();
    this.fetchProdutos();
    this.cosifs = []
    this.camposBloqueados = true
  }

  pesquisar() {
    if (!this.mesPesquisa || !this.anoPesquisa) return

    this.fetchMovimentos(this.mesPesquisa, this.anoPesquisa)
  }
}
