import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home'},
    { title: 'Produtos', url: '/items', icon: 'bag-handle' },
    { title: 'Suplementos', url: '/suplementos', icon: 'body' },
    { title: 'Academias', url: '/academias', icon: 'barbell' },
    { title: 'Clínicas', url: '/clinicas', icon: 'medkit' },
    { title: 'Vouchers', url: '/voucher', icon: 'card' },
  ];
  constructor() {}
}
