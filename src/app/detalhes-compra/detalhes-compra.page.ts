import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CarrinhoService } from '../service/carrinho.service';
import { formatDate, Location } from "@angular/common";
import { AutorizacaoService } from '../service/autorizacao.service';
import { StorageService } from '../service/storage.service';
import { Endereco } from '../models/usuario.models';
import { PagamentoService } from '../service/pagamento.service';

@Component({
  selector: 'app-detalhes-compra',
  templateUrl: './detalhes-compra.page.html',
  styleUrls: ['./detalhes-compra.page.scss'],
})
export class DetalhesCompraPage implements OnInit {

  public dataAgora = new Date();
  public venda: {};
  public carrinho: any;
  public prazoEntrega: any;
  public vlrTotal: number;
  public parcela: number;
  public numeroCartao: number;
  public endereco: Endereco = {
    id: null,
    cep: null,
    logradouro: null,
    numero: null,
    complemento: null,
    bairro: null,
    cidade: null,
    uf: null
  };

  constructor(private carrinhoService: CarrinhoService, public toastController: ToastController, private pagamentoService: PagamentoService, private nav: NavController, private autorizacao: AutorizacaoService, private storage: StorageService, private location: Location) {
    let cartao;
    if(pagamentoService.cartaoPagamento[0].numeroCartao != null){
      cartao = pagamentoService.cartaoPagamento[0].numeroCartao.toString();
      cartao = cartao.substring(cartao.length -4);
    } else
    cartao = null;

    this.carrinho = carrinhoService.carrinho;
    this.vlrTotal = carrinhoService.vlrTotalCarrinho;
    this.parcela = pagamentoService.cartaoPagamento[0].parcela;
    this.numeroCartao = cartao;
    this.prazoEntrega = carrinhoService.carrinho[0].prazoEntrega;

    this.autorizacao.findByLogin(storage.getLocalUser().login).subscribe(data => {
      this.venda = {
        pedidoVenda: {
          condicaoPagamento: this.pagamentoService.cartaoPagamento[0].escolherPagamento,
          valorFinal: this.vlrTotal,
          dtPedidoVenda: formatDate(this.dataAgora, "yyyy-MM-dd", "en-US"),
          dtEntregaVenda: formatDate(this.dataAgora.setDate(this.dataAgora.getDate() + 5), "yyyy-MM-dd", "en-US"),
          situacaoPedidoVenda: this.pagamentoService.cartaoPagamento[0].escolherPagamento == "BOLETO" ? "AGUARDANDO":"RECEBIDO",
          usuario: {
            idLogin: data.idLogin,
            login: data.login,
            pessoa: {
              idPessoa: data.pessoa.idPessoa
            }
          }
        },
        itensPedidoVenda: this.carrinhoService.carrinhoGravar,
      };
    });
  }

  ngOnInit() {
    this.autorizacao.findByLogin(this.storage.getLocalUser().login).subscribe(data => {
      this.endereco.cep = data.pessoa.endereco.cep;
      this.endereco.logradouro = data.pessoa.endereco.logradouro;
      this.endereco.numero = data.pessoa.endereco.numero;
      this.endereco.complemento = data.pessoa.endereco.complemento;
      this.endereco.bairro = data.pessoa.endereco.bairro;
      this.endereco.cidade = data.pessoa.endereco.cidade;
      this.endereco.uf = data.pessoa.endereco.uf;
    });
  }

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
    this.pagamentoService.criarVenda(this.venda).subscribe(resp => { },
    (error) => {
      console.log(error);

      this.errorToast("Ocorreu um erro!");
    });
    this.pagamentoService.verificaFormaCartao = this.pagamentoService.cartaoPagamento[0].escolherPagamento;

    this.nav.navigateRoot("sucesso-compra");
  }
}
