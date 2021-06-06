import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { UsuariosService } from '../service/usuarios.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {
  public formGroup: FormGroup;

  public user = {
    email: null
  };

  public resultado: boolean = false;

  constructor(private formBuilder: FormBuilder, private location: Location, private usuarioService: UsuariosService, private toastController: ToastController, private loadingController: LoadingController) {
    this.formGroup = formBuilder.group({
      email: [
        this.user.email,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ]
    });
  }

  ngOnInit() { }

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

  recuperarSenha() {
    this.showLoading("login");
    this.usuarioService.recoverPassword(this.user).subscribe(
      (data) => {
        this.stopLoader("login");
        this.successToast(data.message)
      },
      (error) => {
        this.stopLoader("login");
        this.errorToast(error.error.message);
      }
    );
  }

  funcaoBack(){
    this.location.back();
  }
}
