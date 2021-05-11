import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuplementosPageRoutingModule } from './suplementos-routing.module';

import { SuplementosPage } from './suplementos.page';
import { PipesModule } from '../pipes/pipes.module';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuplementosPageRoutingModule,
    PipesModule
  ],
  declarations: [SuplementosPage]
})
export class SuplementosPageModule {}
