import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Endereco } from '../models/usuario.models';
import { AutorizacaoService } from '../service/autorizacao.service';
import { StorageService } from '../service/storage.service';
import { UsuariosService } from '../service/usuarios.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {

  public formGroup: FormGroup;
  public endereco: Endereco = {
    id: null,
    cep: null,
    logradouro: null,
    numero: null,
    complemento: null,
    bairro: null,
    cidade: null,
    uf: null
  };

  constructor(private formBuilder: FormBuilder, private autorizacao: AutorizacaoService, private nav: NavController, private storage: StorageService, private usuarioService: UsuariosService, private toastController: ToastController, private loadingController: LoadingController, private location: Location) {
      this.formGroup = formBuilder.group({
        id: this.endereco.id,
        cep: [
          this.endereco.cep,
          Validators.compose([Validators.required, Validators.minLength(1)]),
        ],
        logradouro: [
          this.endereco.logradouro,
          Validators.compose([Validators.required, Validators.minLength(1)]),
        ],
        numero: [
          this.endereco.numero,
          Validators.compose([Validators.required, Validators.minLength(1)]),
        ],
        complemento: this.endereco.complemento,
        bairro: [
          this.endereco.bairro,
          Validators.compose([Validators.required, Validators.minLength(1)]),
        ],
        cidade: [
          this.endereco.cidade,
          Validators.compose([Validators.required, Validators.minLength(1)]),
        ],
        uf: [
          this.endereco.uf,
          Validators.compose([Validators.required, Validators.minLength(1)]),
        ]
      });
    }

  ngOnInit() {
    this.autorizacao.findByLogin(this.storage.getLocalUser().login).subscribe(data => {
      this.endereco = data.pessoa.endereco;
    });
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
    this.showLoading("viacep", "Buscando endereço...");
    this.usuarioService.buscarCep(this.endereco.cep).subscribe(data => {
      this.stopLoader("viacep");
      this.endereco.logradouro = data.logradouro;
      this.endereco.bairro = data.bairro;
      this.endereco.cidade = data.localidade;
      this.endereco.uf = data.uf;

      if(this.endereco.logradouro == null){
        this.errorToast("Não foi encontrado o cep informado.");
        this.formGroup.reset();
      }
    });
  }

  atualizarEndereco(id){
    let atualizarEndereco = {
      id: id,
      cep: this.formGroup.value.cep,
      logradouro: this.formGroup.value.logradouro,
      numero: this.formGroup.value.numero,
      complemento: this.formGroup.value.complemento,
      bairro: this.formGroup.value.bairro,
      cidade: this.formGroup.value.cidade,
      uf: this.formGroup.value.uf
    }

    this.usuarioService.updateAddress(atualizarEndereco).subscribe(data => {},
      error => { console.log(error) });
    this.location.back();
  }
}
