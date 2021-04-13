import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public produtos: any;
  constructor(private produtoService: ProdutosService) { }

  ngOnInit() {
    this.produtoService.getProdutos()
      .subscribe((resposta) => {
        this.produtos = resposta;
        console.log(resposta);
      });
  }

}
