import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from '../service/autorizacao.service';
import { CarrinhoService } from '../service/carrinho.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  public carrinho: any;
  constructor(private carrinhoService: CarrinhoService, public autorizacao: AutorizacaoService, public storage: StorageService) { }

  ngOnInit() {
    this.autorizacao.findByLogin(this.storage.getLocalUser().login).subscribe(data => {
      this.carrinhoService.getCarrinho(data.pessoa.idPessoa)
        .subscribe((resposta) => {
          this.carrinho = resposta;
          console.log(resposta);
      });
    });
  }

}
