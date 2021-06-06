import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voucher } from '../models/voucher.models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {
  public voucher = [];
  public token = this.storage.getLocalUser() !== null ? this.storage.getLocalUser().token : null;
  public headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Authorization": "Bearer " + this.token,
  });

  constructor(private http: HttpClient, public storage: StorageService) { }

  addVoucher(voucher){
    this.voucher.push(voucher);
  }
  getVouchers(){
    return this.http.get('http://localhost:8080/api/voucher/');
  }

  getVoucher(Pid){
    return this.http.get<Voucher>('http://localhost:8080/api/voucher/' + Pid);
  }
}
