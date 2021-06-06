import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { EscolherPagamento } from '../models/escolherPagamento.models';
import { CarrinhoService } from '../service/carrinho.service';
import { PagamentoService } from '../service/pagamento.service';

@Component({
  selector: 'app-escolher-pagamento',
  templateUrl: './escolher-pagamento.page.html',
  styleUrls: ['./escolher-pagamento.page.scss'],
})
export class EscolherPagamentoPage implements OnInit {

  public formGroup: FormGroup;
  public parcela1: number;
  public parcela2: number;
  public parcela3: number;
  public parcela4: number;
  public parcela5: number;
  public form: EscolherPagamento = {
    escolherPagamento: null,
    numeroCartao: null,
    nome: null,
    dataVencimento: null,
    cvv: null,
    parcela: null
  };

  constructor(private formBuilder: FormBuilder, private carrinhoService: CarrinhoService, private nav: NavController, private pagamento: PagamentoService) {
    this.parcela1 = this.carrinhoService.vlrTotalCarrinho / 1;
    this.parcela2 = this.carrinhoService.vlrTotalCarrinho / 2;
    this.parcela3 = this.carrinhoService.vlrTotalCarrinho / 3;
    this.parcela4 = this.carrinhoService.vlrTotalCarrinho / 4;
    this.parcela5 = this.carrinhoService.vlrTotalCarrinho / 5;

    this.formGroup = formBuilder.group({
      escolherPagamento: [
        this.form.escolherPagamento,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      nome: [
        this.form.nome,
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      numeroCartao: [
        this.form.numeroCartao,
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      dataVencimento: [
        this.form.dataVencimento,
        Validators.compose([Validators.required]),
      ],
      cvv: [
        this.form.cvv,
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      parcela: [
        this.form.parcela,
        Validators.compose([Validators.required]),
      ]
    });
  }

  ngOnInit() {

  }

  addPagamento(form) {
    if(this.form.escolherPagamento == 'BOLETO'){
      this.form.numeroCartao = null;
      this.form.parcela = null;
    }

    this.pagamento.addCartao(form);
    this.nav.navigateForward('detalhes-compra');
  }

  escolherPagamentoRadioChange(event) {
    this.form.escolherPagamento = event.target.value;
  }

}
