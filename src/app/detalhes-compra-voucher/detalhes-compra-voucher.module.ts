import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesCompraVoucherPageRoutingModule } from './detalhes-compra-voucher-routing.module';

import { DetalhesCompraVoucherPage } from './detalhes-compra-voucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesCompraVoucherPageRoutingModule
  ],
  declarations: [DetalhesCompraVoucherPage]
})
export class DetalhesCompraVoucherPageModule {}
