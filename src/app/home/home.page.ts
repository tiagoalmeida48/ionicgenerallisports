import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.models';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public barraPesquisar: boolean = false;
  public pesquisar = '';
  public produtos: any;
  constructor(private produtoService: ProdutosService) { }

  ngOnInit() {
    this.produtoService.getProdutos()
      .subscribe((resposta: Produto) => {
        this.produtos = resposta;
      });
  }

  buscarProduto(mostrar) {
    const texto = mostrar.target.value;
    this.pesquisar = texto;
  }
}
