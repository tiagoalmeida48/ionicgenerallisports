import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CabecalhoBackComponent } from './cabecalho-back/cabecalho-back.component';

const pages = [
  CabecalhoBackComponent
]
@NgModule({
    declarations: pages,
    exports: pages,
    imports: [CommonModule, IonicModule],
})
export class ComponentesModule { }
