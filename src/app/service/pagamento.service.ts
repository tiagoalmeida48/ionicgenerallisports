import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  public cartaoPagamento = [];
  public verificaFormaCartao: string;
  public token = this.storage.getLocalUser() !== null ? this.storage.getLocalUser().token : null;
  public headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Authorization": "Bearer " + this.token,
  });
  constructor(private http: HttpClient, public storage: StorageService) { }

  addCartao(form){
    this.cartaoPagamento = [];
    this.cartaoPagamento.push(form);
  }

  criarVenda(venda) {
    return this.http.post(`http://localhost:8080/api/pedidos`, venda, { 'headers': this.headers });
  }

  listarVendaPorLogin(login){
    return this.http.get(`http://localhost:8080/api/pedidos/list/${login}`, { 'headers': this.headers });
  }

  getVenda(id) {
    return this.http.get(`http://localhost:8080/api/pedidos/${id}`, { 'headers': this.headers });
  }
}
