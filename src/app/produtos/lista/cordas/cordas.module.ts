import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CordasPageRoutingModule } from './cordas-routing.module';

import { CordasPage } from './cordas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CordasPageRoutingModule
  ],
  declarations: [CordasPage]
})
export class CordasPageModule {}
