import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalUser } from '../models/LocalUser.models';
import { UserAuthLogin, Usuario } from '../models/usuario.models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {

  public jwtHelper: JwtHelperService = new JwtHelperService();
  public idPessoaAtual: number;

  constructor(private http: HttpClient, public storage: StorageService) {

  }

  authenticate(userAuthLogin: UserAuthLogin) {
    return this.http.post<UserAuthLogin>('http://localhost:8080/api/usuarios/login', userAuthLogin,
    {
      observe: 'response',
      responseType: 'json'
    }
    );
  }

  successfulLogin(bearerToken: string) {
    let token = bearerToken;
    let user: LocalUser = {
      token,
      login: this.jwtHelper.decodeToken(token).sub,
    }
    this.storage.setLocalUser(user);
  }

  findByLogin(login: string) {
    let token = this.storage.getLocalUser().token;
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      "Authorization": "Bearer " + token,
    });

    return this.http.get<Usuario>('http://localhost:8080/api/usuarios/' + login,
     { 'headers': headers }
    );
  }
}
