import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  public token = this.storage.getLocalUser() !== null ? this.storage.getLocalUser().token : null;
  public headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Authorization": "Bearer " + this.token,
  });

  constructor(private http: HttpClient, public storage: StorageService) { }

  getProdutos(){
    return this.http.get('http://localhost:8080/api/produtos/');
  }

  getProduto(Pid){
    return this.http.get<Produto>('http://localhost:8080/api/produtos/' + Pid);
  }
}
