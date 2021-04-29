import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from '../service/autorizacao.service';
import { ProdutosService } from '../service/produtos.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-suplementos',
  templateUrl: './suplementos.page.html',
  styleUrls: ['./suplementos.page.scss'],
})
export class SuplementosPage implements OnInit {
  public produtos: any;
  constructor(private produtoService: ProdutosService, public autorizacaoService: AutorizacaoService, public storage: StorageService) { }

  ngOnInit() {
    this.produtoService.getProduto('categoria/Suplementos')
      .subscribe((resposta) => {
        this.produtos = resposta;
      });
  }
}
