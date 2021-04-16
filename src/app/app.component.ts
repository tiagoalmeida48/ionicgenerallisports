import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Produtos', url: '/items', icon: 'bag-handle' },
    { title: 'Academias', url: '/academias', icon: 'barbell' },
    { title: 'Clínicas', url: '/clinicas', icon: 'medkit' },
  ];
  constructor() {}
}
