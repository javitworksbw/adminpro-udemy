import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {

    // reference variable to work with user data
    this.usuario = this.usuarioService.usuario;

  }

  logout() {

    // logs out
    this.usuarioService.logOut();

  }

}
