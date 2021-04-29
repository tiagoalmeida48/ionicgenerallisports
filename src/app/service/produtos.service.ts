import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.models';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos(){
    return this.http.get('http://localhost:8080/api/produtos/');
  }

  getProduto(Pid){
    return this.http.get<Produto>('http://localhost:8080/api/produtos/' + Pid);
  }

  // createPosts(posts: Posts){
  //   return this.http.post('https://reqres.in/api/users', posts);
  // }

  // updatePosts(posts: Posts){
  //   return this.http.put('https://reqres.in/api/users/' + posts.id, posts);
  // }

  // deletePosts(posts: Posts){
  //   return this.http.delete('https://reqres.in/api/users/' + posts.id);
  // }
}
