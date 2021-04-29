import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Carrinho } from '../models/carrinho.models';
import { Produto } from '../models/produto.models';
import { AutorizacaoService } from '../service/autorizacao.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutosService } from '../service/produtos.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.page.html',
  styleUrls: ['./detalhes-produto.page.scss'],
})
export class DetalhesProdutoPage implements OnInit {

  public carrinho: Carrinho;
  public produto: Produto;
  public caminhoFoto = null;
  public categoria = null;
  public custoUnitario = null;
  public descricao = null;
  public fotoEmString = null;
  public idProduto = null;
  public inativo = null;
  public nomeProduto = null;
  public precoVenda = null;
  public quantidadeEstoque = null;
  public saldoAtual = null;
  public validade = null;
  public idPessoa = null;

  constructor(public route: ActivatedRoute, private produtoService: ProdutosService, public carrinhoService: CarrinhoService, public nav: NavController, public autorizacao: AutorizacaoService, public storage: StorageService) {
    this.route.paramMap.subscribe((param1: ParamMap) => {
      this.produtoService.getProduto(param1.get('id'))
        .subscribe(resposta => {
          this.produto = resposta;
          this.categoria = resposta.categoria;
          this.caminhoFoto = resposta.caminhoFoto;
          this.custoUnitario = resposta.custoUnitario;
          this.descricao = resposta.descricao;
          this.fotoEmString = resposta.fotoEmString;
          this.idProduto = resposta.idProduto;
          this.inativo = resposta.inativo;
          this.nomeProduto = resposta.nomeProduto;
          this.precoVenda = resposta.precoVenda;
          this.quantidadeEstoque = resposta.quantidadeEstoque;
          this.saldoAtual = resposta.saldoAtual;
          this.validade = resposta.validade;
        });
    });
  }

  ngOnInit() {

  }

  addCarrinho(produto: Produto){
    this.autorizacao.findByLogin(this.storage.getLocalUser().login).subscribe(data => {
      this.carrinho = {
        "idUsuario": data.pessoa.idPessoa,
        "idProduto": produto.idProduto,
        "produto": produto.nomeProduto,
        "caminhoFoto": produto.fotoEmString,
        "descricao": produto.descricao,
        "precoVenda": produto.precoVenda,
        "quantidadeCarrinho": 1
      };
      console.log(this.carrinho);
      this.carrinhoService.createCarrinho(this.carrinho).subscribe(data => {
        console.log(data);
      })
    });
    this.nav.navigateRoot('carrinho');
  }
}
