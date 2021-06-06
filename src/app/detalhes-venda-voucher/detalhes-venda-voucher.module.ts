import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesVendaVoucherPageRoutingModule } from './detalhes-venda-voucher-routing.module';

import { DetalhesVendaVoucherPage } from './detalhes-venda-voucher.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DetalhesVendaVoucherPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [DetalhesVendaVoucherPage, CabecalhoBackComponent ]
})
export class DetalhesVendaVoucherPageModule {}
