import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/service.index';


import swal from 'sweetalert';

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

  // user data bind to the template driven form
  user: any = {
    email:    '',
    password: ''
  };

  rememberMe: boolean = false;



  constructor(private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit() {

    // llama a la funcion de inicializacion de plugins
    // para que funcionen menus y sus plugins jquery
    init_plugins();

    // get the email from the localStorage
    this.user.email = localStorage.getItem('email') || '';

    // sets rememberMe state
    if ( this.user.email.lenght > 0 ) {
        this.rememberMe = true ;
    }

  }


  login(form: NgForm) {
      // console.log( form.value );

      if ( form.invalid ) {
        return;
      }

      // create the user ( Usuario )
      const user: Usuario = new Usuario( null , form.value.email, form.value.password);
      // console.log( user);

      // let's call the service
      // saves token , user and id in localStorage
      this.usuarioService.login( user , form.value.rememberMe )
        .subscribe( (res: any ) => {

           // console.log(res);

           if ( res.ok ) {

               // reset the form
               form.reset();

               // valid user navigates to the dashboard
               this.router.navigate( ['/dashboard']);

           } else {

              // there was some error

           }


        },
        (err) => {
            console.log('Error: ' + err);
            console.log( JSON.stringify(err.error) );

            // Sweet alert
            swal('Error!', err.error.message , 'error');

     });



  }

}
