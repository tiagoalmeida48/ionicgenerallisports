import { Component, Input, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-cabecalho-back',
  templateUrl: './cabecalho-back.component.html',
  styleUrls: ['./cabecalho-back.component.scss'],
})
export class CabecalhoBackComponent implements OnInit {
  @Input() titulo: string;

  constructor(public location: Location) { }

  ngOnInit() {}

  funcaoBack(){
    this.location.back();
  }
}
