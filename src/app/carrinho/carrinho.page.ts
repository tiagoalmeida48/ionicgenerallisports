import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  public carrinho: any;
  public vlrTotal: number;
  public quantidadeCarrinho: number;
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private carrinhoService: CarrinhoService, private location: Location, private toastController: ToastController, private nav: NavController, private loadingController: LoadingController) {
    this.carrinho = carrinhoService.carrinho;
    this.vlrTotal = carrinhoService.vlrTotalCarrinho;

    this.formGroup = formBuilder.group({
      quantidadeCarrinho: [
        this.quantidadeCarrinho,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
    });
  }

  ngOnInit() {}

  ionViewDidEnter(){
    this.vlrTotal = this.carrinhoService.vlrTotalCarrinho;
  }

  atualizarValorTotal(){
    this.carrinhoService.vlrTotalCarrinho = 0;
    for (let i = 0; i < this.carrinhoService.carrinho.length; i++) {
      this.carrinhoService.vlrTotalCarrinho += this.carrinhoService.carrinho[i].vlrSubTotal;
    }

    this.vlrTotal = this.carrinhoService.vlrTotalCarrinho;
  }

  removeProduto(id: number){
    const result = this.carrinho.find(MCar => MCar.idCarrinho === id);
    const pos = this.carrinho.indexOf(result);
    this.carrinho.splice(pos,1);

    this.atualizarValorTotal();
  }

  addQtde(id: number, qtd: number){
    const result = this.carrinho.find(MCar => MCar.idCarrinho === id);
    const pos = this.carrinho.indexOf(result);

    if(qtd <= this.carrinho[pos].quantidadeEstoque){
      this.carrinho[pos].quantidadeCarrinho = qtd;
      this.carrinho[pos].vlrSubTotal = this.carrinho[pos].precoVenda * qtd;

      this.atualizarValorTotal();
    } else {
      this.errorToast("Quantidade insuficiente em estoque")
    }
  }

  removeQtde(id: number, qtd: number){
    const result = this.carrinho.find(MCar => MCar.idCarrinho === id);
    const pos = this.carrinho.indexOf(result);

    if(qtd > 0){
      this.carrinho[pos].quantidadeCarrinho = qtd;
      this.carrinho[pos].vlrSubTotal = this.carrinho[pos].precoVenda * qtd;

      this.atualizarValorTotal();
    } else {
      this.errorToast("Quantidade minima é 1, se quiser excluir o produto clique em excluir")
    }
  }

  funcaoBack(){
    this.location.back();
  }

  async stopLoader(loadingId: string) {
    return await this.loadingController.dismiss(null, null, loadingId);
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

  confirmarEndereco(){
    this.carrinhoService.addCarrinhoGravar(this.carrinho);
    this.nav.navigateForward('confirmar-endereco');
  }
}

