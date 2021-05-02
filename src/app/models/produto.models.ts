export interface Produto {
  idProduto: number,
  nomeProduto: string,
  descricao: string,
  categoria: string,
  fornecedor: Fornecedor,
  validade: string
  custoUnitario: number,
  precoVenda: number,
  quantidadeEstoque: number,
  saldoAtual: number,
  caminhoFoto: string,
  fotoEmString: string,
  inativo: boolean,
}

interface Fornecedor {
  id: number,
  razaoSocial: string,
  cnpj: string,
  email: string,
  tel: string
  categoriaProduto: string,
  endereco: Endereco,
  inativo: boolean,
}

interface Endereco {
  id: number,
  logradouro: string,
  numero: number,
  complemento: string,
  bairro: string,
  cidade: string,
  cep: string,
  uf: string
}
