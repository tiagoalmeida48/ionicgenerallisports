import { Component, OnInit } from '@angular/core';
import { Voucher } from '../models/voucher.models';
import { ComprasVouchersService } from '../service/compras-vouchers.service';

@Component({
  selector: 'app-meus-vouchers',
  templateUrl: './meus-vouchers.page.html',
  styleUrls: ['./meus-vouchers.page.scss'],
})
export class MeusVouchersPage implements OnInit {

  public meusVouchers: any;
  public countMeusVouchers: number;
  constructor(private comprasVouchersService: ComprasVouchersService) {
    comprasVouchersService.getVouchers().subscribe((data: Voucher) => {
      this.meusVouchers = data;
      this.countMeusVouchers = this.meusVouchers.length;
    })
  }

  ngOnInit() {
  }

}
