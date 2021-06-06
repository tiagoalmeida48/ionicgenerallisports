import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPageRoutingModule } from './usuario-routing.module';

import { UsuarioPage } from './usuario.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UsuarioPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [UsuarioPage, CabecalhoBackComponent]
})
export class UsuarioPageModule {}
