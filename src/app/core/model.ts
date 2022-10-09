export interface MovimentoManual {
  mes?: number
  ano?: number
  nrLancamento?: number
  descricao?: string
  valor?: number
  produtoCosif?: ProdutoCosif
}

export interface MovimentoManualInput {
  mes?: number
  ano?: number
  descricao?: string
  valor?: number
  codigoProduto?: string
  codigoCosif?: string
}

export interface ProdutoCosif {
  codigoCosif?: string,
  codigoClassificacao?: string
  status?: string
  produto?: Produto

  label?: string
}

export interface Produto {
  codigo?: string
  descricao?: string
  status?: string,
}
