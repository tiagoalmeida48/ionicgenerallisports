import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicasPageRoutingModule } from './clinicas-routing.module';

import { ClinicasPage } from './clinicas.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicasPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ClinicasPage]
})
export class ClinicasPageModule {}
