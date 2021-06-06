import { Usuario } from "./usuario.models";
import { Voucher } from "./voucher.models";

export interface VendaVoucher {
  idPedidoVenda: number;
  condicaoPagamento: string;
  valorFinal: number;
  dtPedidoVenda: Date;
  situacaoPedidoVenda: string;
  usuario: Usuario;
  validado: any;
  voucher: Voucher;
}
