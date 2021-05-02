import { Produto } from "./produto.models";

export interface Carrinho {
  idCarrinho?: number,
  idUsuario: number,
  produto: Produto,
  quantidadeCarrinho: number
}
