import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolasPageRoutingModule } from './bolas-routing.module';

import { BolasPage } from './bolas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolasPageRoutingModule
  ],
  declarations: [BolasPage]
})
export class BolasPageModule {}
