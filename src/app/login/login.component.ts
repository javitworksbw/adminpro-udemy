import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// we declare that this function is defined in another 
// script file outside typescript
// to initialize the jquery plugins
// it is defined in js/custom.js 
declare function init_plugins();


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {

    // llama a la funcion de inicializacion de plugins
    // para que funcionen menus y sus plugins jquery
    init_plugins();

  }

  login() {

      this.router.navigate( ['/dashboard']);

  }

}
