import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CarrinhoService } from '../service/carrinho.service';
import { PagamentoService } from '../service/pagamento.service';

@Component({
  selector: 'app-sucesso-compra',
  templateUrl: './sucesso-compra.page.html',
  styleUrls: ['./sucesso-compra.page.scss'],
})
export class SucessoCompraPage implements OnInit {

  public formaPagamento: any;
  constructor(private carrinhoService: CarrinhoService, private pagamentoService: PagamentoService, private nav: NavController) {

  }

  ngOnInit() { }

  ionViewWillEnter(){
    this.formaPagamento = this.pagamentoService.verificaFormaCartao;
  }

  minhasCompras(){
    this.carrinhoService.carrinho.splice(0);
    this.carrinhoService.carrinhoGravar.splice(0);
    this.nav.navigateForward('minhas-compras');
  }

  home(){
    this.carrinhoService.carrinho.splice(0);
    this.carrinhoService.carrinhoGravar.splice(0);
    this.nav.navigateForward('home');
  }
}
