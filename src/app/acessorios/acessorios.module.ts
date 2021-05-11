import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcessoriosPageRoutingModule } from './acessorios-routing.module';

import { AcessoriosPage } from './acessorios.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcessoriosPageRoutingModule,
    PipesModule
  ],
  declarations: [AcessoriosPage]
})
export class AcessoriosPageModule {}
