export interface Carrinho {
  idCarrinho?: number,
  idUsuario: number,
  idProduto: number,
  data: Date,
  quantidadeCarrinho: number,
  vlrUnitario: number,
  vlrTotal: number
}

export interface ArrayCarrinho {
  carrinho: Carrinho,
  detProduto: Produto
}

interface Produto {
  idProduto: number,
  nomeProduto: string,
  descricao: string,
  categoria: string,
  validade: string
  custoUnitario: number,
  precoVenda: number,
  quantidadeEstoque: number,
  saldoAtual: number,
  caminhoFoto: string,
  fotoEmString: string,
  inativo: boolean,
}
