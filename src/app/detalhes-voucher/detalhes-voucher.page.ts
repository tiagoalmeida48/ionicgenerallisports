import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AutorizacaoService } from '../service/autorizacao.service';
import { StorageService } from '../service/storage.service';
import { VoucherService } from '../service/voucher.service';

@Component({
  selector: 'app-detalhes-voucher',
  templateUrl: './detalhes-voucher.page.html',
  styleUrls: ['./detalhes-voucher.page.scss'],
})
export class DetalhesVoucherPage implements OnInit {

  public voucher: any;
  public idVoucher = null;
  public titulo = null;
  public fotoEmString = null;
  public precoVenda = null;
  public inativo = null;

  constructor(public route: ActivatedRoute, private voucherService: VoucherService, public nav: NavController, public autorizacao: AutorizacaoService, public storage: StorageService) {
    this.route.paramMap.subscribe((param1: ParamMap) => {
      this.voucherService.getVoucher(param1.get('id'))
        .subscribe(resposta => {
          this.voucher = resposta;
          this.fotoEmString = resposta.fotoEmString;
          this.idVoucher = resposta.idVoucher;
          this.inativo = resposta.inativo;
          this.titulo = resposta.titulo;
          this.precoVenda = resposta.precoVenda;
      });
    });
  }

  ngOnInit() {
  }

  confirmarCompra(voucher){
    this.voucherService.voucher = [];
    this.voucherService.addVoucher(voucher);
    this.storage.posLogin = "detalhes-voucher/" + this.voucher.idVoucher;
    this.nav.navigateForward('escolher-pagamento-voucher');
  }
}
