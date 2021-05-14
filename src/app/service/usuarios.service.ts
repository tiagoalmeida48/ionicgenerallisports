import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormCadastro, Usuario } from '../models/usuario.models';
import { StorageService } from './storage.service';
//import { RecoverPassword } from '../models/RecoverPassword';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public token = this.storage.getLocalUser() !== null ? this.storage.getLocalUser().token : null;
  public headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Authorization": "Bearer " + this.token,
  });

  constructor(private http: HttpClient, public storage: StorageService) { }


  createUser(form: FormCadastro) {
    return this.http.post(`http://localhost:8080/api/usuarios/criarUsuario`, form);
  }

  updateAvatar(userInfo) {
    const [base64Header, base64] = userInfo.base64Image.split(',');
    userInfo.base64Image = base64;

    return this.http.post<Usuario>(`http://localhost:8080/api/usuarios/avatarUpdate`, userInfo, { 'headers': this.headers });
  }

  recoverPassword(email) {
    return this.http.post<Usuario>(`http://localhost:8080/api/esqueci-senha`, email);
  }

  updateAddress(user) {
    return this.http.put<Usuario>(`http://localhost:8080/api/usuarios/addressUpdate/${user.id}`, user, { 'headers': this.headers });
  }

  buscarCep(cep) {
    return this.http.get<any>(`http://viacep.com.br/ws/${cep}/json`);
  }
}
