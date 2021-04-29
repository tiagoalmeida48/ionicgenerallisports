import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho } from '../models/carrinho.models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private http: HttpClient, public storage: StorageService) { }

  getCarrinho(id){
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      "Authorization": "Bearer " + this.storage.getLocalUser().token
    });
    return this.http.get('http://localhost:8080/api/carrinhocompras/' + id, {'headers': headers});
  }

  public createCarrinho(carrinho: Carrinho){
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": 'POST, GET, OPTIONS, DELETE',
      "Access-Control-Allow-Headers": 'Content-Type',
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "Bearer " + this.storage.getLocalUser().token
    });
    return this.http.post('http://localhost:8080/api/carrinhocompras', carrinho, {'headers': headers});
  }

  // updatePosts(posts: Posts){
  //   return this.http.put('https://reqres.in/api/users/' + posts.id, posts);
  // }

  // deletePosts(posts: Posts){
  //   return this.http.delete('https://reqres.in/api/users/' + posts.id);
  // }
}
