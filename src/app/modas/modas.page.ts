import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from '../service/autorizacao.service';
import { ProdutosService } from '../service/produtos.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-modas',
  templateUrl: './modas.page.html',
  styleUrls: ['./modas.page.scss'],
})
export class ModasPage implements OnInit {
  public produtos: any;

  constructor(private produtoService: ProdutosService, public autorizacaoService: AutorizacaoService, public storage: StorageService) { }

  ngOnInit() {
    this.produtoService.getProduto('categoria/Modas')
      .subscribe((resposta) => {
        this.produtos = resposta;
        alert(this.produtos.length);
      });
  }
}
