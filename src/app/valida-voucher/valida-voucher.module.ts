import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidaVoucherPageRoutingModule } from './valida-voucher-routing.module';

import { ValidaVoucherPage } from './valida-voucher.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidaVoucherPageRoutingModule
  ],
  declarations: [ValidaVoucherPage, CabecalhoBackComponent]
})
export class ValidaVoucherPageModule {}
