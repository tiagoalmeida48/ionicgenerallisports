import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuplementosPageRoutingModule } from './suplementos-routing.module';

import { SuplementosPage } from './suplementos.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuplementosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [SuplementosPage]
})
export class SuplementosPageModule {}
