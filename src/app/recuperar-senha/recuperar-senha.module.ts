import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarSenhaPageRoutingModule } from './recuperar-senha-routing.module';

import { RecuperarSenhaPage } from './recuperar-senha.page';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarSenhaPageRoutingModule
  ],
  declarations: [RecuperarSenhaPage, CabecalhoBackComponent]
})
export class RecuperarSenhaPageModule {}
