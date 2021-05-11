import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicasPageRoutingModule } from './clinicas-routing.module';

import { ClinicasPage } from './clinicas.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicasPageRoutingModule
  ],
  declarations: [ClinicasPage, CabecalhoBackComponent]
})
export class ClinicasPageModule {}
