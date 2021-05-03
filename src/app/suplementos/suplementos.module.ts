import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuplementosPageRoutingModule } from './suplementos-routing.module';

import { SuplementosPage } from './suplementos.page';
import { ComponentesModule } from '../componentes/componentes.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuplementosPageRoutingModule,
    ComponentesModule,
    PipesModule
  ],
  declarations: [SuplementosPage]
})
export class SuplementosPageModule {}
