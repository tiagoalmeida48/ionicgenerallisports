export interface EscolherPagamento {
  escolherPagamento: string,
  numeroCartao: number,
  nome: string,
  dataVencimento: Date,
  cvv: number,
  parcela: number
}
