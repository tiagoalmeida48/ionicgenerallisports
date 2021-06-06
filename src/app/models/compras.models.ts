import { Produto } from "./produto.models";
import { Usuario } from "./usuario.models";

export interface Compras {
  "idPedidoVenda": number,
  "dtPedidoVenda": Date,
  "dtEntregaVenda": Date,
  "situacaoPedidoVenda": string,
  "condicaoPagamento": string,
  "valorFinal": number,
  "usuario": Usuario
  "inativo": boolean,
  "itens": Itens
}
interface Itens {
  "idItensPedidoVenda": number,
  "produto": Produto
  "quantidade": number,
  "valor": number
}
