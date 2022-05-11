import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioModel;

  constructor() { }

  ngOnInit() {

    this.usuario = new UsuarioModel();

  }

  login(formLogin:NgForm){

    if(formLogin.invalid) { return; }

    console.log("Datos enviados");
    console.log(this.usuario);
    console.log(formLogin);
    
    

  }

}
