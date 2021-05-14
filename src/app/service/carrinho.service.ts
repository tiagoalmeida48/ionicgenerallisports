import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carrinho } from '../models/carrinho.models';
import { Produto } from '../models/produto.models';
import { ProdutosService } from './produtos.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public carrinho = [];
  constructor(){

  }

  addCarrinho(addCarrinho: Carrinho){
    this.carrinho.push({
    "idCarrinho?": addCarrinho.idCarrinho,
    "idUsuario": addCarrinho.idUsuario,
    "idProduto": addCarrinho.idProduto,
    "data": addCarrinho.data,
    "quantidadeCarrinho": addCarrinho.quantidadeCarrinho,
    "vlrUnitario": addCarrinho.vlrUnitario,
    "vlrTotal": addCarrinho.vlrTotal
    });
  }
}
