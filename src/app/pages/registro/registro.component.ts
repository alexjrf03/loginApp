import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:UsuarioModel;


  constructor( private auth:AuthService ) { }

  ngOnInit() {

    this.usuario = new UsuarioModel();

  }

  onSubmit(registroForm:NgForm){

    if(registroForm.invalid){ return; }

    this.auth.nuevoUsuario(this.usuario).subscribe
    
  }


}
