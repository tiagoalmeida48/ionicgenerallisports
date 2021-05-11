import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademiasPageRoutingModule } from './academias-routing.module';

import { AcademiasPage } from './academias.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademiasPageRoutingModule
  ],
  declarations: [AcademiasPage, CabecalhoBackComponent]
})
export class AcademiasPageModule {}
