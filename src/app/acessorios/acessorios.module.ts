import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcessoriosPageRoutingModule } from './acessorios-routing.module';

import { AcessoriosPage } from './acessorios.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcessoriosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [AcessoriosPage]
})
export class AcessoriosPageModule {}
