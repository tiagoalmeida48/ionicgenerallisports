import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home'},
    { title: 'Produtos', url: '/produtos/lista', icon: 'list' },
    { title: 'Suplementos', url: '/suplementos', icon: 'paper-plane' },
    { title: 'Academias', url: '/academias', icon: 'heart' },
    { title: 'Clínicas', url: '/clinicas', icon: 'archive' },
    { title: 'Vouchers', url: '/voucher', icon: 'trash' },
  ];
  constructor() {}
}
