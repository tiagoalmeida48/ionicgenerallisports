import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusVouchersPageRoutingModule } from './meus-vouchers-routing.module';

import { MeusVouchersPage } from './meus-vouchers.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusVouchersPageRoutingModule
  ],
  declarations: [MeusVouchersPage, CabecalhoBackComponent]
})
export class MeusVouchersPageModule {}
