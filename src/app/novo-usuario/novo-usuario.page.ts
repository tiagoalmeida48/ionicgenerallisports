import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { FormCadastro, Usuario } from '../models/usuario.models';
import { AutorizacaoService } from '../service/autorizacao.service';
import { StorageService } from '../service/storage.service';
import { UsuariosService } from '../service/usuarios.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.page.html',
  styleUrls: ['./novo-usuario.page.scss'],
})
export class NovoUsuarioPage implements OnInit {

  public formGroup: FormGroup;
  public form: FormCadastro = {
    usuario: {
      login: null,
      senha: null,
      email: null,
      pessoa: {
        nome: null,
        cpf: null,
        dtNascimento: null,
        sexo: null,
        celular: null,
        telefone: null,
        endereco: {
          uf: null,
          cidade: null,
          logradouro: null,
          bairro: null,
          cep: null,
          complemento: null,
          numero: 0,
        }
      }
    },
    confirmaSenha: null,
    listaPerfil:
      [{
        authority: "ROLE_CLIENTE",
        descricao: "Cliente do aplicativo"
      }]
  }

  constructor(private formBuilder: FormBuilder, private autorizacao: AutorizacaoService, private nav: NavController, private storage: StorageService, private usuarioService: UsuariosService, private toastController: ToastController, private loadingController: LoadingController, private location: Location) {
    this.formGroup = formBuilder.group({
      nome: [
        this.form.usuario.pessoa.nome,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      cpf: [
        this.form.usuario.pessoa.cpf,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      dtNascimento: [
        this.form.usuario.pessoa.dtNascimento,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      sexo: [
        this.form.usuario.pessoa.sexo,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      celular: this.form.usuario.pessoa.celular,
      telefone: this.form.usuario.pessoa.telefone,
      email: [
        this.form.usuario.email,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      login: [
        this.form.usuario.login,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      senha: [
        this.form.usuario.senha,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      confirmaSenha: [
        this.form.confirmaSenha,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      cep: [
        this.form.usuario.pessoa.endereco.cep,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      logradouro: [
        this.form.usuario.pessoa.endereco.logradouro,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      numero: [
        this.form.usuario.pessoa.endereco.numero,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      complemento: this.form.usuario.pessoa.endereco.complemento,
      bairro: [
        this.form.usuario.pessoa.endereco.bairro,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      cidade: [
        this.form.usuario.pessoa.endereco.cidade,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      uf: [
        this.form.usuario.pessoa.endereco.uf,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ]
    });
  }

  ngOnInit() {

  }

  async showLoading(loadingId: string, loadingMessage: string = 'Aguarde...') {
    const loading = await this.loadingController.create({
      id: loadingId,
      message: loadingMessage,
      spinner: 'circles',
      duration: 4000,
    });
    return await loading.present();
  }

  async stopLoader(loadingId: string) {
      return await this.loadingController.dismiss(null, null, loadingId);
  }

  async errorToast(message) {
    const toast = await this.toastController.create({
      color: 'danger',
      position: 'top',
      header: 'ERROR!',
      message: message,
      duration: 3000
    });
    toast.present();
  }

  async successToast(message) {
    const toast = await this.toastController.create({
      color: 'success',
      position: 'top',
      header: 'SUCESSO!',
      message: message,
      duration: 3000
    });
    toast.present();
  }

  buscarEnderecoPorCep() {
    this.usuarioService.buscarCep(this.form.usuario.pessoa.endereco.cep).subscribe(data => {
      if(data.erro)
        this.errorToast("Não foi encontrado o cep informado.");
      else {
        this.form.usuario.pessoa.endereco.logradouro = data.logradouro;
        this.form.usuario.pessoa.endereco.bairro = data.bairro;
        this.form.usuario.pessoa.endereco.cidade = data.localidade;
        this.form.usuario.pessoa.endereco.uf = data.uf;
      }
    });
  }

  novoUsuario(form){
    let data = form.usuario.pessoa.dtNascimento;
    form.usuario.pessoa.dtNascimento = data.split("/")[2] + '-' + data.split("/")[1] + '-' + data.split("/")[0];
    //this.usuarioService.createUser(form).subscribe(data => console.log(data));
    console.log(form);
  }
}
