import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AutorizacaoService } from '../service/autorizacao.service';
import { StorageService } from '../service/storage.service';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  public formGroup: FormGroup;
  public form = {
    "idLogin": null,
    "email": null,
    "login": null,
    "senha": null,
    "confirmaSenha": null,
    "pessoa": {
      "idPessoa": null,
      "celular": null,
      "cpf": null,
      "dtNascimento": null,
      "nome": null,
      "sexo": null,
      "telefone": null,
      "endereco":{
        "id": null,
        "bairro": null,
        "cep": null,
        "cidade": null,
        "complemento": null,
        "logradouro": null,
        "numero": null,
        "uf": null
      }
    }
  };

  constructor(private formBuilder: FormBuilder, private nav: NavController, private storage: StorageService, private usuarioService: UsuariosService, private toastController: ToastController, private loadingController: LoadingController, private autorizacao: AutorizacaoService) {
    this.autorizacao.findByLogin(storage.getLocalUser().login).subscribe(data => {
      this.form.idLogin = data.idLogin;
      this.form.email = data.email;
      this.form.login = data.login;
      this.form.pessoa.idPessoa = data.pessoa.idPessoa;
      this.form.pessoa.celular = data.pessoa.celular;
      this.form.pessoa.cpf = data.pessoa.cpf;
      this.form.pessoa.dtNascimento = data.pessoa.dtNascimento;
      this.form.pessoa.nome = data.pessoa.nome;
      this.form.pessoa.sexo = data.pessoa.sexo;
      this.form.pessoa.telefone = data.pessoa.telefone;
      this.form.pessoa.endereco.id = data.pessoa.endereco.id;
      this.form.pessoa.endereco.bairro = data.pessoa.endereco.bairro;
      this.form.pessoa.endereco.cep = data.pessoa.endereco.cep;
      this.form.pessoa.endereco.cidade = data.pessoa.endereco.cidade;
      this.form.pessoa.endereco.complemento = data.pessoa.endereco.complemento;
      this.form.pessoa.endereco.logradouro = data.pessoa.endereco.logradouro;
      this.form.pessoa.endereco.numero = data.pessoa.endereco.numero;
      this.form.pessoa.endereco.uf = data.pessoa.endereco.uf;
    });

    this.formGroup = formBuilder.group({
      nome: [
        this.form.pessoa.nome,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      cpf: [
        this.form.pessoa.cpf,
        Validators.compose([Validators.required, Validators.minLength(11)]),
      ],
      dtNascimento: [
        this.form.pessoa.dtNascimento,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      sexo: [
        this.form.pessoa.sexo,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      celular: this.form.pessoa.celular,
      telefone: this.form.pessoa.telefone,
      email: [
        this.form.email,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      login: [
        this.form.login,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      cep: [
        this.form.pessoa.endereco.cep,
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      logradouro: [
        this.form.pessoa.endereco.logradouro,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      numero: [
        this.form.pessoa.endereco.numero,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      complemento: this.form.pessoa.endereco.complemento,
      bairro: [
        this.form.pessoa.endereco.bairro,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      cidade: [
        this.form.pessoa.endereco.cidade,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      uf: [
        this.form.pessoa.endereco.uf,
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
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
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
    this.usuarioService.buscarCep(this.form.pessoa.endereco.cep).subscribe(data => {
      if (data.erro)
        this.errorToast("Não foi encontrado o cep informado.");
      else {
        this.form.pessoa.endereco.logradouro = data.logradouro;
        this.form.pessoa.endereco.bairro = data.bairro;
        this.form.pessoa.endereco.cidade = data.localidade;
        this.form.pessoa.endereco.uf = data.uf;
      }
    });
  }

  editarUsuario(form) {
    this.showLoading('aguarde');
    this.usuarioService.updateUser(form).subscribe(data => {
      this.successToast("Cadastro atualizado com sucesso");
      this.nav.navigateForward("info-usuario");
    }, error => {
      if(error.error[0].code == 'cpf.invalido')
        this.errorToast("CPF é inválido");
      else if(error.error[0].code == 'cpf.existente')
        this.errorToast("CPF já existe");
      else if(error.error[0].code == 'idade.invalido')
        this.errorToast("Idade tem que ser mais que 18 anos");
      else if(error.error[0].code == 'login.existente')
        this.errorToast("Este login já existe");
      else if(error.error[0].code == 'email.existente')
        this.errorToast("E-mail já existe");
      else
        this.errorToast("Ocorreu um erro");
    });
  }
}
