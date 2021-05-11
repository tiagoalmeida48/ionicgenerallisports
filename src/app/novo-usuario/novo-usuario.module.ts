import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoUsuarioPageRoutingModule } from './novo-usuario-routing.module';

import { NovoUsuarioPage } from './novo-usuario.page';
import { BrMaskerModule } from 'br-mask';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NovoUsuarioPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [NovoUsuarioPage, CabecalhoBackComponent]
})
export class NovoUsuarioPageModule {}
