import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos(){
    return this.http.get('http://localhost:8080/api/produtos/');
  }

  // getUsuario(Pid){
  //   return this.http.get<Usuario>('https://reqres.in/api/users/' + Pid);
  // }

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
