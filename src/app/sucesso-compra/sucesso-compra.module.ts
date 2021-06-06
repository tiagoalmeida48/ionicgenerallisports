import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SucessoCompraPageRoutingModule } from './sucesso-compra-routing.module';

import { SucessoCompraPage } from './sucesso-compra.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SucessoCompraPageRoutingModule
  ],
  declarations: [SucessoCompraPage, CabecalhoBackComponent]
})
export class SucessoCompraPageModule {}
