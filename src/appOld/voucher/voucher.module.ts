import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoucherPageRoutingModule } from './voucher-routing.module';

import { VoucherPage } from './voucher.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoucherPageRoutingModule,
    ComponentesModule
  ],
  declarations: [VoucherPage]
})
export class VoucherPageModule {}
