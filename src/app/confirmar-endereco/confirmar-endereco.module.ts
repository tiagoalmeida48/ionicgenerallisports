import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarEnderecoPageRoutingModule } from './confirmar-endereco-routing.module';

import { ConfirmarEnderecoPage } from './confirmar-endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarEnderecoPageRoutingModule
  ],
  declarations: [ConfirmarEnderecoPage]
})
export class ConfirmarEnderecoPageModule {}
