import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesVendaPageRoutingModule } from './detalhes-venda-routing.module';

import { DetalhesVendaPage } from './detalhes-venda.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesVendaPageRoutingModule
  ],
  declarations: [DetalhesVendaPage, CabecalhoBackComponent]
})
export class DetalhesVendaPageModule {}
