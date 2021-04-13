import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/appOld/service/produtos.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

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
