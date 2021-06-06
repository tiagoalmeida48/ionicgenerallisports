import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ComprasService } from '../service/compras.service';

@Component({
  selector: 'app-detalhes-venda',
  templateUrl: './detalhes-venda.page.html',
  styleUrls: ['./detalhes-venda.page.scss'],
})
export class DetalhesVendaPage implements OnInit {

  public compra: any;
  public idCompra: number;
  public condicaoPagamento: string;
  public dtEntregaVenda: Date;
  public dtPedidoVenda: Date;
  public situacaoCompra: string;
  public valorCompra: number;

  constructor(private comprasService: ComprasService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((id: ParamMap) => {
      this.comprasService.getCompra(id.get("id")).subscribe(data => {
        this.compra = data.itens;
        this.idCompra = data.idPedidoVenda;
        this.condicaoPagamento = data.condicaoPagamento;
        this.dtEntregaVenda = data.dtEntregaVenda;
        this.dtPedidoVenda = data.dtPedidoVenda;
        this.situacaoCompra = data.situacaoPedidoVenda;
        this.valorCompra = data.valorFinal;
      });
    });
  }
  ngOnInit() {
  }

}
