import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from '../service/autorizacao.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
})
export class InfoUsuarioPage implements OnInit {

  public idLogin?: number;
  public login: string;
  public senha: string;
  public email: string;
  public caminhoFoto?: string;
  public inativo?: boolean;
  public idPessoa?: number;
  public nome: string;
  public cpf: string;
  public dtNascimento: Date;
  public sexo: string;
  public celular: string;
  public telefone: string
  public id?: number;
  public cep: string ;
  public logradouro: string ;
  public numero: number ;
  public bairro: string ;
  public cidade: string ;
  public uf: string;
  public complemento?: string;

  constructor(private autorizacao: AutorizacaoService, private storage: StorageService) {
    this.autorizacao.findByLogin(storage.getLocalUser().login).subscribe(data => {
      this.idLogin = data.idLogin;
      this.login = data.login;
      this.email = data.email;
      this.caminhoFoto = data.caminhoFoto;
      this.inativo = data.inativo;
      this.idPessoa = data.pessoa.idPessoa;
      this.nome = data.pessoa.nome;
      this.cpf = data.pessoa.cpf;
      this.dtNascimento = data.pessoa.dtNascimento;
      this.sexo = data.pessoa.sexo;
      this.celular = data.pessoa.celular != '' ? data.pessoa.celular : null;
      this.telefone = data.pessoa.telefone != '' ? data.pessoa.telefone : null;
      this.id = data.pessoa.endereco.id;
      this.cep =  data.pessoa.endereco.cep;
      this.logradouro =  data.pessoa.endereco.logradouro;
      this.numero =  data.pessoa.endereco.numero;
      this.bairro =  data.pessoa.endereco.bairro;
      this.cidade =  data.pessoa.endereco.cidade;
      this.uf = data.pessoa.endereco.uf;
      this.complemento = data.pessoa.endereco.complemento != '' ? data.pessoa.endereco.complemento : null;
    });
  }

  ngOnInit() {
  }

}
