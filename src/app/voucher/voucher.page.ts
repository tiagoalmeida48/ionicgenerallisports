import { Component, OnInit } from '@angular/core';
import { VoucherService } from '../service/voucher.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.page.html',
  styleUrls: ['./voucher.page.scss'],
})
export class VoucherPage implements OnInit {

  public voucher: any;
  constructor(private voucherService: VoucherService) {
    voucherService.getVouchers().subscribe(data => {
      this.voucher = data;
    })
  }

  ngOnInit() {
  }

}
