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

  addCarrinho(Produto){
    let added = false;
    for (let p of this.carrinho) {
      if (p.id === Produto.idProduto) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      //Produto.quantidadeCarrinho = 1;
      this.carrinho.push(Produto);
    }
  }
}
