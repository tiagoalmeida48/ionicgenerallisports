export interface Carrinho {
  produto: idProduto,
  quantidade: number,
  valor: number,
}

interface idProduto {
  idProduto: number,
}

export interface Produto {
  produto: {
    idCarrinho: number,
    idProduto: number,
    idPessoa: number,
    nomeProduto: string,
    descricao: string,
    categoria: string,
    validade: string
    precoVenda: number,
    fotoEmString: string,
    quantidadeCarrinho: number,
    quantidadeEstoque: number,
    valor: number,
    prazoEntrega: string
  }
}

