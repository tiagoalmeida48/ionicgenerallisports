import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoPageRoutingModule } from './endereco-routing.module';

import { EnderecoPage } from './endereco.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnderecoPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [EnderecoPage, CabecalhoBackComponent]
})
export class EnderecoPageModule {}
