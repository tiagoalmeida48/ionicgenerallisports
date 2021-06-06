import { Carrinho } from "./carrinho.models";

export interface venda {
  carrinho: Carrinho,
  condicaoPagamento: string;
  valorFinal: number;
  dtPedidoVenda: string;
  dtEntregaVenda: string;
  situacaoPedidoVenda: string;
  usuario: any;
}
