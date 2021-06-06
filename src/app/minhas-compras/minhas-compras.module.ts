import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasComprasPageRoutingModule } from './minhas-compras-routing.module';

import { MinhasComprasPage } from './minhas-compras.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MinhasComprasPageRoutingModule
  ],
  declarations: [MinhasComprasPage, CabecalhoBackComponent]
})
export class MinhasComprasPageModule {}
