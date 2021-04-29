export interface Produto {
  caminhoFoto: string,
  categoria: string,
  custoUnitario: number,
  descricao: string,
  fornecedor: Fornecedor,
  fotoEmString: string,
  idProduto: number,
  inativo: boolean,
  nomeProduto: string,
  precoVenda: number,
  quantidadeEstoque: number,
  saldoAtual: number,
  validade: string
}

interface Fornecedor {
  categoriaProduto: string,
  cnpj: string,
  email: string,
  endereco: Endereco,
  id: number,
  inativo: boolean,
  razaoSocial: string,
  tel: string
}

interface Endereco {
  bairro: string,
  cep: string,
  cidade: string,
  complemento: string,
  id: number,
  logradouro: string,
  numero: number,
  uf: string,
}
