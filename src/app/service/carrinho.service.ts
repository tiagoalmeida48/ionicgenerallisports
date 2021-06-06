import { Injectable } from '@angular/core';
import { Carrinho } from '../models/carrinho.models';
import { Produto } from '../models/produto.models';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public carrinhoGravar = [];
  public carrinho = [];
  public vlrTotalCarrinho: number;

  constructor(){ }

  addCarrinhoGravar(carrinho){
    this.carrinhoGravar = [];
    for (let i = 0; i < carrinho.length; i++) {
      this.carrinhoGravar.push({
        "produto": {
          "idProduto": carrinho[i].idProduto,
          "idPessoa": carrinho[i].idPessoa,
          "nomeProduto": carrinho[i].nomeProduto,
          "descricao": carrinho[i].descricao,
          "categoria": carrinho[i].categoria,
          "validade": carrinho[i].validade,
          "precoVenda": carrinho[i].precoVenda,
          "fotoEmString": carrinho[i].fotoEmString,
          "quantidade": carrinho[i].quantidadeCarrinho,
          "quantidadeEstoque": carrinho[i].quantidadeEstoque,
          "valor": carrinho[i].precoVenda * carrinho[i].quantidadeCarrinho,
          "prazoEntrega": carrinho[i].prazoEntrega,
          "caminhoFoto": carrinho[i].caminhoFoto,
          "custoUnitario": carrinho[i].custoUnitario,
          "fornecedor": {
            "id": carrinho[i].fornecedor.id
          },
          "inativo": carrinho[i].inativo,
          "saldoAtual": carrinho[i].saldoAtual
        },
        "quantidade": carrinho[i].quantidadeCarrinho,
        "valor": carrinho[i].vlrSubTotal,
      });
    }
  }

  addCarrinho(addCarrinho: Produto){
    const result = this.carrinho.find(MCar => MCar.idProduto === addCarrinho.idProduto);
    if(result == "undefined" || result == null){
      this.carrinho.push({
        "idCarrinho": this.carrinho.length + 1,
        "idProduto": addCarrinho.idProduto,
        "idPessoa": addCarrinho.idPessoa,
        "nomeProduto": addCarrinho.nomeProduto,
        "descricao": addCarrinho.descricao,
        "categoria": addCarrinho.categoria,
        "validade": addCarrinho.validade,
        "precoVenda": addCarrinho.precoVenda,
        "fotoEmString": addCarrinho.fotoEmString,
        "quantidadeCarrinho": 1,
        "quantidadeEstoque": addCarrinho.quantidadeEstoque,
        "vlrSubTotal": addCarrinho.precoVenda * 1,
        "prazoEntrega": addCarrinho.prazoEntrega,
        "caminhoFoto": addCarrinho.caminhoFoto,
        "custoUnitario": addCarrinho.custoUnitario,
        "fornecedor": {
          "id": addCarrinho.fornecedor.id
        },
        "inativo": addCarrinho.inativo,
        "saldoAtual": addCarrinho.saldoAtual
      });
    } else{
      const pos = this.carrinho.indexOf(result);
      const quantidadeCarrinho = this.carrinho[pos].quantidadeCarrinho + 1;
      this.carrinho[pos].quantidadeCarrinho = quantidadeCarrinho;
      this.carrinho[pos].vlrSubTotal = this.carrinho[pos].precoVenda * quantidadeCarrinho;
    }
    this.atualizarValorTotal();
  }

  atualizarValorTotal(){
    this.vlrTotalCarrinho = 0;
    for (let i = 0; i < this.carrinho.length; i++) {
      this.vlrTotalCarrinho += this.carrinho[i].vlrSubTotal;
    }
  }
}
