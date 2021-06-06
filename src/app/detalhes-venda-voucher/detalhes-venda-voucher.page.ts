import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { ComprasVouchersService } from '../service/compras-vouchers.service';

@Component({
  selector: 'app-detalhes-venda-voucher',
  templateUrl: './detalhes-venda-voucher.page.html',
  styleUrls: ['./detalhes-venda-voucher.page.scss'],
})
export class DetalhesVendaVoucherPage implements OnInit {
  public voucher: any;
  public idCompra: number;
  public condicaoPagamento: string;
  public dtPedidoVenda: Date;
  public situacaoCompra: string;
  public valorCompra: number;
  public fotoEmString: string;
  public titulo: string;
  public voucherValidado: string;
  public valueQrCode = (Math.floor(Math.random() * (999999 - 100000)) + 100000).toString();

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private comprasVouchersService: ComprasVouchersService, private activatedRoute: ActivatedRoute, private toastController: ToastController, private nav: NavController) {
    this.activatedRoute.paramMap.subscribe((id: ParamMap) => {
      this.comprasVouchersService.getVoucher(id.get("id")).subscribe(data => {
        this.voucher = data;
        this.idCompra = data.idPedidoVenda;
        this.fotoEmString = data.voucher.fotoEmString;
        this.titulo = data.voucher.titulo;
        this.voucherValidado = data.validado;
        this.condicaoPagamento = data.condicaoPagamento;
        this.dtPedidoVenda = data.dtPedidoVenda;
        this.situacaoCompra = data.situacaoPedidoVenda;
        this.valorCompra = data.valorFinal;
      });
    });

    this.formGroup = formBuilder.group({
      validado: [
        this.voucherValidado,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ]
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

  validar(){
    if(this.formGroup.value.validado == this.valueQrCode){
      this.voucher.validado = this.formGroup.value.validado;
      this.comprasVouchersService.atualizaVoucher(this.voucher).subscribe(data => {
        this.successToast("Voucher Validado");
        this.nav.navigateForward("meus-vouchers");
      }, error => { this.errorToast("Ocorreu um erro"); });
    } else
      this.errorToast("Voucher invalido ");
  }
}
