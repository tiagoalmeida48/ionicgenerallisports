import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.models';
import { AutorizacaoService } from '../service/autorizacao.service';
import { CarrinhoService } from '../service/carrinho.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-confirmar-endereco',
  templateUrl: './confirmar-endereco.page.html',
  styleUrls: ['./confirmar-endereco.page.scss'],
})
export class ConfirmarEnderecoPage implements OnInit {

  public infoPessoa: Usuario;
  public nomePessoa: string;
  public idEndereco: number;
  public cep: string;
  public logradouro: string;
  public numero: number;
  public complemento: string;
  public bairro: string;
  public cidade: string;
  public estado: string;

  constructor(public autorizacao: AutorizacaoService, public storage: StorageService) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.autorizacao.findByLogin(this.storage.getLocalUser().login).subscribe(data => {
      this.infoPessoa = data;
      this.nomePessoa = data.pessoa.nome;
      this.idEndereco = data.pessoa.endereco.id;
      this.cep = data.pessoa.endereco.cep;
      this.logradouro = data.pessoa.endereco.logradouro;
      this.numero = data.pessoa.endereco.numero;
      this.complemento = data.pessoa.endereco.complemento;
      this.bairro = data.pessoa.endereco.bairro;
      this.cidade = data.pessoa.endereco.cidade;
      this.estado = data.pessoa.endereco.uf;
    })
  }
}
