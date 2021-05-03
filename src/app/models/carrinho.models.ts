export interface Carrinho {
  idCarrinho?: number,
  idUsuario: number,
  produto: Produto,
  quantidadeCarrinho: number
}

interface Produto {
  idProduto: number
}
