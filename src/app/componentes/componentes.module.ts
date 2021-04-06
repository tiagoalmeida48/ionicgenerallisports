import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';

const pages = [
  HeaderComponent
]
@NgModule({
    declarations: pages,
    exports: pages,
    imports: [CommonModule, IonicModule],
})
export class ComponentesModule { }
