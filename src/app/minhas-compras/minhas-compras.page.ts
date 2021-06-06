import { Component, OnInit } from '@angular/core';
import { Compras } from '../models/compras.models';
import { ComprasService } from '../service/compras.service';

@Component({
  selector: 'app-minhas-compras',
  templateUrl: './minhas-compras.page.html',
  styleUrls: ['./minhas-compras.page.scss'],
})
export class MinhasComprasPage implements OnInit {

  public minhasCompras: any;
  public countMinhasCompras: number;
  constructor(private comprasService: ComprasService) {
    comprasService.getCompras().subscribe((data: Compras) => {
      this.minhasCompras = data;
      this.countMinhasCompras = this.minhasCompras.length;
    })
  }

  ngOnInit() { }
}
