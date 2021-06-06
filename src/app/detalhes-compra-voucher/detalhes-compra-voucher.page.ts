import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AutorizacaoService } from '../service/autorizacao.service';
import { PagamentoVoucherService } from '../service/pagamentoVoucher.service';
import { StorageService } from '../service/storage.service';
import { VoucherService } from '../service/voucher.service';
import { formatDate, Location } from "@angular/common";
import { PagamentoService } from '../service/pagamento.service';

@Component({
  selector: 'app-detalhes-compra-voucher',
  templateUrl: './detalhes-compra-voucher.page.html',
  styleUrls: ['./detalhes-compra-voucher.page.scss'],
})
export class DetalhesCompraVoucherPage implements OnInit {

  public dataAgora = new Date();
  public parcela: number;
  public numeroCartao: number;
  public voucher: any;
  public valorCompra: number;
  public vendaVoucher = {};

  constructor(private voucherService: VoucherService, public toastController: ToastController, private pagamentoVoucherService: PagamentoVoucherService, private pagamentoService: PagamentoService, private nav: NavController, private autorizacao: AutorizacaoService, private storage: StorageService, private location: Location) {
    let cartao;
    if(pagamentoVoucherService.cartaoPagamento[0].numeroCartao != null){
      cartao = pagamentoVoucherService.cartaoPagamento[0].numeroCartao.toString();
      cartao = cartao.substring(cartao.length -4);
    } else
    cartao = null;

    this.voucher = voucherService.voucher[0];
    this.parcela = pagamentoVoucherService.cartaoPagamento[0].parcela;
    this.numeroCartao = cartao;
    this.valorCompra = this.parcela > 1 ? Math.round((this.voucher.precoVenda / this.parcela) * this.parcela) : this.voucher.precoVenda;

    this.autorizacao.findByLogin(storage.getLocalUser().login).subscribe(data => {
      this.vendaVoucher = {
        condicaoPagamento: this.pagamentoVoucherService.cartaoPagamento[0].escolherPagamento,
        valorFinal: this.voucher.precoVenda,
        dtPedidoVenda: formatDate(this.dataAgora, "yyyy-MM-dd", "en-US"),
        situacaoPedidoVenda: this.pagamentoVoucherService.cartaoPagamento[0].escolherPagamento == "BOLETO" ? "AGUARDANDO":"RECEBIDO",
        voucher: this.voucher,
        usuario: data,
      };
    });
  }

  ngOnInit() { }

  async errorToast(message) {
    const toast = await this.toastController.create({
      color: 'danger',
      position: 'top',
      header: 'ERROR!',
      message: message,
      duration: 3000
    });
    toast.present();
  }

  async successToast(message) {
    const toast = await this.toastController.create({
      color: 'success',
      position: 'top',
      header: 'SUCESSO!',
      message: message,
      duration: 3000
    });
    toast.present();
  }

  funcaoBack(){
    this.location.back();
  }

  finalizarCompra(){
    this.pagamentoVoucherService.criarVenda(this.vendaVoucher).subscribe(resp => { },
    (error) => {
      console.log(error);

      this.errorToast("Ocorreu um erro!");
    });
    this.pagamentoService.verificaFormaCartao = this.pagamentoVoucherService.cartaoPagamento[0].escolherPagamento;

    this.nav.navigateRoot("sucesso-compra");
  }
}
