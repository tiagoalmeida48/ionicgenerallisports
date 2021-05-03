import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModasPageRoutingModule } from './modas-routing.module';

import { ModasPage } from './modas.page';
import { ComponentesModule } from '../componentes/componentes.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModasPageRoutingModule,
    ComponentesModule,
    PipesModule
  ],
  declarations: [ModasPage]
})
export class ModasPageModule {}
