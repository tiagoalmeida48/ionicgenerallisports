import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesVoucherPageRoutingModule } from './detalhes-voucher-routing.module';

import { DetalhesVoucherPage } from './detalhes-voucher.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesVoucherPageRoutingModule
  ],
  declarations: [DetalhesVoucherPage, CabecalhoBackComponent]
})
export class DetalhesVoucherPageModule {}
