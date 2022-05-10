import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.models';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:UsuarioModel;


  constructor() { }

  ngOnInit() {

    this.usuario = new UsuarioModel();

    this.usuario.email = 'alexjrf27@gmail.com'

  }

  onSubmit(registroForm:NgForm){

    if(registroForm.invalid){ return; }

    console.log("Form enviado");
    console.log(this.usuario);
    console.log(registroForm);
    
    
    

  }


}
