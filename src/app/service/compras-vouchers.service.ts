import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VendaVoucher } from '../models/vendaVoucher.models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ComprasVouchersService {
  public token = this.storage.getLocalUser() !== null ? this.storage.getLocalUser().token : null;
  public headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Authorization": "Bearer " + this.token,
  });

  constructor(private http: HttpClient, public storage: StorageService) { }

  getVouchers(){
    return this.http.get('http://localhost:8080/api/pedidosvoucher/list/' + this.storage.getLocalUser().login, {headers: this.headers});
  }

  getVoucher(Pid){
    return this.http.get<VendaVoucher>('http://localhost:8080/api/pedidosvoucher/' + Pid);
  }

  atualizaVoucher(voucher) {
    return this.http.post<VendaVoucher>(`http://localhost:8080/api/pedidosvoucher`, voucher, { 'headers': this.headers });
  }
}
