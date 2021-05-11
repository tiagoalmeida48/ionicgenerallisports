import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoucherPageRoutingModule } from './voucher-routing.module';

import { VoucherPage } from './voucher.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoucherPageRoutingModule
  ],
  declarations: [VoucherPage, CabecalhoBackComponent]
})
export class VoucherPageModule {}
