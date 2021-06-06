import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherPagamentoVoucherPageRoutingModule } from './escolher-pagamento-voucher-routing.module';

import { EscolherPagamentoVoucherPage } from './escolher-pagamento-voucher.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EscolherPagamentoVoucherPageRoutingModule
  ],
  declarations: [EscolherPagamentoVoucherPage, CabecalhoBackComponent]
})
export class EscolherPagamentoVoucherPageModule {}
