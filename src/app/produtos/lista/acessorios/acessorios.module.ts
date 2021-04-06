import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcessoriosPageRoutingModule } from './acessorios-routing.module';

import { AcessoriosPage } from './acessorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcessoriosPageRoutingModule
  ],
  declarations: [AcessoriosPage]
})
export class AcessoriosPageModule {}
