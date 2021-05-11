import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarEnderecoPageRoutingModule } from './confirmar-endereco-routing.module';

import { ConfirmarEnderecoPage } from './confirmar-endereco.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarEnderecoPageRoutingModule,
  ],
  declarations: [ConfirmarEnderecoPage, CabecalhoBackComponent]
})
export class ConfirmarEnderecoPageModule {}
