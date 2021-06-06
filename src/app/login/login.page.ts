import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoadingController, NavController, ToastController } from "@ionic/angular";
import { StorageService } from "../service/storage.service";
import { AutorizacaoService } from "../service/autorizacao.service";
import { UserAuthLogin } from "../models/usuario.models";
import { Location } from "@angular/common";

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
    private formBuilder: FormBuilder, private authService: AutorizacaoService, private nav: NavController, private storage: StorageService, private toastController: ToastController, private loadingController: LoadingController, private location: Location) {
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
    if(this.storage.getLocalUser() != null){
      this.location.back();
      this.location.back();
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
    this.authService.authenticate(this.user).subscribe(
      (data) => {
        this.authService.successfulLogin(data.body.jwtToken);
        if(this.storage.posLogin != null){
          if(this.storage.posLogin.includes('detalhesProduto'))
            this.nav.navigateForward(this.storage.posLogin);
          else if(this.storage.posLogin.includes("confirmar-endereco"))
            this.nav.navigateForward(this.storage.posLogin);
          else if(this.storage.posLogin.includes("detalhes-voucher"))
            this.nav.navigateForward(this.storage.posLogin);
          else
            this.nav.navigateForward('home');
        } else
          this.nav.navigateForward('home');
      },
      (error) => {
        this.errorToast("Usuário ou senha inválido!");
      }
    );
  }

  funcaoBack(){
    this.location.back();
  }
}
