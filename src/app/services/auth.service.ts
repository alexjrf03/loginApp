import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyA4y0STl9-LIpO3N-rylUjbcWLZy9My66U';


  //Crear nuevo Usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Autenticar Usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http:HttpClient ) { }

  login(usuario:UsuarioModel){


  }

  logout(){


  }

  nuevoUsuario(usuario:UsuarioModel){


    const authData = {

      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true

    }

    return this.http.post(`${this.url}signUp?key=${this.apiKey}`, authData);


  }

}
