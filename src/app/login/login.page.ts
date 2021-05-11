import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoadingController, NavController, ToastController } from "@ionic/angular";
import { UsuariosService } from "../service/usuarios.service";
import { StorageService } from "../service/storage.service";
import { AutorizacaoService } from "../service/autorizacao.service";
import { UserAuthLogin } from "../models/usuario.models";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public formGroup: FormGroup;

  public isLoggedIn: boolean;

  public user: UserAuthLogin = {
    username: "",
    password: "",
  };

  public resultado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AutorizacaoService,
    private nav: NavController,
    private storage: StorageService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    this.formGroup = formBuilder.group({
      username: [
        this.user.username,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      password: [
        this.user.password,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
    });
  }

  ngOnInit() {
    this.isLoggedIn = this.storage.getLocalUser() !== null ? true : false;

    if (this.isLoggedIn) {
      this.nav.navigateRoot("home");
    }
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

  doLogin() {
    this.showLoading("login");
    this.authService.authenticate(this.user).subscribe(
      (data) => {
        this.stopLoader("login");
        this.authService.successfulLogin(data.body.jwtToken);
        location.reload();
      },
      (error) => {
        this.stopLoader("login");
        this.errorToast("Usuário ou senha inválido!");
      }
    );
  }
}
