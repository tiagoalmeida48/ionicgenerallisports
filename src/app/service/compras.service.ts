import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compras } from '../models/compras.models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  public token = this.storage.getLocalUser() !== null ? this.storage.getLocalUser().token : null;
  public headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Authorization": "Bearer " + this.token,
  });

  constructor(private http: HttpClient, public storage: StorageService) { }

  getCompras(){
    return this.http.get<Compras>('http://localhost:8080/api/pedidos/list/' + this.storage.getLocalUser().login, {headers: this.headers});
  }

  getCompra(Pid){
    return this.http.get<Compras>('http://localhost:8080/api/pedidos/' + Pid);
  }
}
