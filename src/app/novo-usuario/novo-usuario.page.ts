import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
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
    listaPerfil: [{
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
        Validators.compose([Validators.required, Validators.minLength(14)]),
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
        Validators.compose([
          Validators.required, Validators.minLength(1)
        ]),
      ],
      login: [
        this.form.usuario.login,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      senha: [
        this.form.usuario.senha,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      confirmaSenha: [
        this.form.confirmaSenha,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      cep: [
        this.form.usuario.pessoa.endereco.cep,
        Validators.compose([Validators.required, Validators.minLength(5)]),
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

  ngOnInit() { }

  checarSenha(form: FormGroup) {
    let senha = this.form.usuario.senha;
    let confirmaSenha = this.form.confirmaSenha;

    return senha === confirmaSenha ? true : false;
  }

  async showLoading(loadingId: string, loadingMessage: string = 'Aguarde...') {
    const loading = await this.loadingController.create({
      id: loadingId,
      message: loadingMessage,
      spinner: 'circles',
      duration: 4000,
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
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
      if (data.erro)
        this.errorToast("Não foi encontrado o cep informado.");
      else {
        this.form.usuario.pessoa.endereco.logradouro = data.logradouro;
        this.form.usuario.pessoa.endereco.bairro = data.bairro;
        this.form.usuario.pessoa.endereco.cidade = data.localidade;
        this.form.usuario.pessoa.endereco.uf = data.uf;
      }
    });
  }

  novoUsuario(form) {
    this.showLoading('aguarde');
    if (this.checarSenha(form))
      this.usuarioService.createUser(form).subscribe(data => {
        this.successToast("Cadastro realizado com sucesso");
        this.nav.navigateForward("login");
      }, error => {
        if(error.error[0].code == 'cpf.invalido')
          this.errorToast("CPF é inválido");
        else if(error.error[0].code == 'cpf.existente')
          this.errorToast("CPF já existe");
        else if(error.error[0].code == 'senha.diferente')
          this.errorToast("As senhas não são iguais");
        else if(error.error[0].code == 'idade.invalido')
          this.errorToast("Idade tem que ser mais que 18 anos");
        else if(error.error[0].code == 'login.existente')
          this.errorToast("Este login já existe");
        else if(error.error[0].code == 'email.existente')
          this.errorToast("E-mail já existe");
        else
          this.errorToast("Ocorreu um erro");
      });
    else
      this.errorToast("As senhas não são iguais");

    this.stopLoader('aguarde');
  }
}
