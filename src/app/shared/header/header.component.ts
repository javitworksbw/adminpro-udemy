import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  logout() {

    // logs out
    this.usuarioService.logOut();

  }

}
