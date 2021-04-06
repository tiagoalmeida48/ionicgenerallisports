import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademiasPageRoutingModule } from './academias-routing.module';

import { AcademiasPage } from './academias.page';
import { ComponentesModule } from '../componentes/componentes.module';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademiasPageRoutingModule,
    ComponentesModule
  ],
  declarations: [AcademiasPage]
})
export class AcademiasPageModule {}
