import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesProdutoPageRoutingModule } from './detalhes-produto-routing.module';

import { DetalhesProdutoPage } from './detalhes-produto.page';
import { LoginPageRoutingModule } from '../login/login-routing.module';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesProdutoPageRoutingModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetalhesProdutoPage, CabecalhoBackComponent]
})
export class DetalhesProdutoPageModule {}
