import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrinho } from '../models/carrinho.models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Authorization": "Bearer " + this.storage.getLocalUser().token
  });
  constructor(private http: HttpClient, public storage: StorageService) { }

  getCarrinho(id){
    return this.http.get<Carrinho>('http://localhost:8080/api/carrinhocompras/' + id, {'headers': this.headers});
  }

  createCarrinho(carrinho: Carrinho){
    return this.http.post<Carrinho>('http://localhost:8080/api/carrinhocompras', carrinho, {'headers': this.headers});
  }

  // public updateCarrinho(carrinho: CarrinhoItem){
  //   return this.http.put('https://reqres.in/api/users/' + carrinho.idCarrinho, carrinho);
  // }

  deleteCarrinho(id){
    alert(id);
    return this.http.delete<Carrinho>('http://localhost:8080/api/carrinhocompras/delete/' + id, {'headers': this.headers});

  }

  // deletePosts(posts: Posts){
  //   return this.http.delete('https://reqres.in/api/users/' + posts.id);
  // }
}
