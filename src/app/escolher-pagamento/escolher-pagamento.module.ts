import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherPagamentoPageRoutingModule } from './escolher-pagamento-routing.module';

import { EscolherPagamentoPage } from './escolher-pagamento.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EscolherPagamentoPageRoutingModule
  ],
  declarations: [EscolherPagamentoPage, CabecalhoBackComponent]
})
export class EscolherPagamentoPageModule {}
