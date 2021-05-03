import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from '../service/autorizacao.service';
import { ProdutosService } from '../service/produtos.service';
import { StorageService } from '../service/storage.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-suplementos',
  templateUrl: './suplementos.page.html',
  styleUrls: ['./suplementos.page.scss'],
})
export class SuplementosPage implements OnInit {

  public barraPesquisar: boolean = false;
  public pesquisar = '';
  public zeroProdutos: boolean = false;
  public produtos: any;
  constructor(private produtoService: ProdutosService, public location: Location, public autorizacaoService: AutorizacaoService, public storage: StorageService) { }

  ngOnInit() {
    this.produtoService.getProduto('categoria/Suplementos')
      .subscribe((resposta) => {
        this.produtos = resposta;
        if(this.produtos.length == 0)
          this.zeroProdutos = true;
        else
          this.zeroProdutos = false;
      });
  }

  buscarProduto(mostrar) {
    const texto = mostrar.target.value;
    this.pesquisar = texto;
  }

  funcaoBack(){
    this.location.back();
  }
}
