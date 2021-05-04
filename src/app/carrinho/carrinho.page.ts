import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Carrinho } from '../models/carrinho.models';
import { AutorizacaoService } from '../service/autorizacao.service';
import { CarrinhoService } from '../service/carrinho.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  public carrinho: Carrinho;
  constructor(private carrinhoService: CarrinhoService, public app: AppComponent, public autorizacao: AutorizacaoService, public storage: StorageService) { }

  ngOnInit() {
    this.autorizacao.findByLogin(this.storage.getLocalUser().login).subscribe(data => {
      this.carrinhoService.getCarrinho(data.pessoa.idPessoa)
        .subscribe((resposta) => {
           console.log(this.carrinhoService.CarrinhoDeCompraGet);
          //console.log(resposta);
      });
    });

    //this.carrinho = this.app.CarrinhoDeCompra;
  }

  removeProduto(id){
    let pos = this.carrinhoService.CarrinhoDeCompraGet.indexOf(id);
    this.carrinhoService.CarrinhoDeCompraGet.slice(pos, 1);
  }

}
