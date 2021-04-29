import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from '../service/autorizacao.service';
import { ProdutosService } from '../service/produtos.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.page.html',
  styleUrls: ['./acessorios.page.scss'],
})
export class AcessoriosPage implements OnInit {
  public produtos: any;
  constructor(private produtoService: ProdutosService, public autorizacaoService: AutorizacaoService, public storage: StorageService) { }

  ngOnInit() {
    this.produtoService.getProduto('categoria/Acessórios')
      .subscribe((resposta) => {
        this.produtos = resposta;
      });
  }
}
