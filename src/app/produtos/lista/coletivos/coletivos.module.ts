import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColetivosPageRoutingModule } from './coletivos-routing.module';

import { ColetivosPage } from './coletivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColetivosPageRoutingModule
  ],
  declarations: [ColetivosPage]
})
export class ColetivosPageModule {}
