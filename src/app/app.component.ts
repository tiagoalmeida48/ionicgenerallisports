import { Component } from '@angular/core';
import { Carrinho } from './models/carrinho.models';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sobre', url: '/sobre', icon: 'bag-handle' },
    { title: 'Academias', url: '/academias', icon: 'barbell' },
    { title: 'Clínicas', url: '/clinicas', icon: 'medkit' },
    { title: 'Voucher', url: '/voucher', icon: 'medkit' },
    { title: 'Validar Voucher', url: '/validarvoucher', icon: 'medkit' },
    { title: 'Login', url: '/login', icon: 'people' },
  ];
  constructor() {}
}
