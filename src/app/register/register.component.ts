import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

// from service.index
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';


// Sweet alert
//import * as _swal from 'sweetalert';
//import { SweetAlert } from 'sweetalert/typings/core';


//const swal: SweetAlert = _swal as any;

import swal from 'sweetalert';


// we declare that this function is defined in another
// script file outside typescript
// to initialize the jquery plugins
// it is defined in js/custom.js
declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  passwordsAreEqualValidator( value1: string , value2: string ) {
    return ( group: FormGroup ) => {

      // get the controls values
      const pass1 = group.controls[value1].value ;
      const pass2 = group.controls[value2].value ;

      // if passwords are equalss
      if ( pass1 === pass2) {
        // means no error
        return null;
      }

      // this is the error to show if they are not equal ( not valid )
      return {
        areEqual: true
      };

    };

  }

  ngOnInit() {

    // llama a la funcion de inicializacion de plugins
    // para que funcionen menus y sus plugins jquery
    init_plugins();

    this.formGroup = new FormGroup({

        nombre: new FormControl(null , Validators.required),
        email:  new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null , Validators.required),
        password2: new FormControl(null, Validators.required),
        agreeTerms: new FormControl(false )
    }, { validators: this.passwordsAreEqualValidator('password', 'password2') });


    // Fill in the form
    this.formGroup.setValue({
      nombre: 'test',
      email: 'test@test.com',
      password: '123456',
      password2: '123456',
      agreeTerms: false
    });

  }

  // on submitting the form
  onFormSubmit( ) {

    if ( this.formGroup.invalid ) {
      return;
    }


    // check agreeTerms
    if ( !this.formGroup.value.agreeTerms ) {

      //console.log('You must agree terms and conditions');


      // Sweet alert
      swal('Important!', 'You must accept Terms and Conditions!', 'warning');
      return;

    }

    // console.log( this.formGroup.value );

    // create the user ( Usuario )
    const user: Usuario = new Usuario( this.formGroup.value.nombre ,
                            this.formGroup.value.email ,
                            this.formGroup.value.password
                        );

    // let's call the service
    this.usuarioService.createUser( user )
      .subscribe( (res: any ) => this.router.navigate( ['/login'] ),
         (err) => {
             console.log('Error: ' + err);
             console.log( JSON.stringify(err.error) );

             // Sweet alert
             swal('Error!', err.error.message , 'error');

        });




  }

}
