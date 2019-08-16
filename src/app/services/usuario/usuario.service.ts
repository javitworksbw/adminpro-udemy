import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario.model';


// Sweet alert
//import * as _swal from 'sweetalert';
//import { SweetAlert } from 'sweetalert/typings/core';


//const swal: SweetAlert = _swal as any;

import swal from 'sweetalert';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // user and token received
  usuario: Usuario;
  token: string;


  constructor(public http: HttpClient,
              public router: Router) {
    // console.log('Servicio de usuario listo');

    // loads initially if there is a token ( means that the user is logged in)
    this.loadToken();

  }


  // user login method to make a post to the backend
  login( user: Usuario, rememberMe: boolean = false ): Observable<any> {

    const url = URL_SERVICIOS + '/login';

    // saves the email in localStorage
    if ( rememberMe ) {
        localStorage.setItem( 'email' , user.email );
    } else {
        localStorage.removeItem( 'email' );
    }

    // makes to post request to login the user
    return this.http.post<any>(url, user )
             .pipe(
                map( (resp: any) => {

                  // saves token , user and id in localStorage
                  localStorage.setItem( 'id'       , resp.id                      );
                  localStorage.setItem( 'usuario'  , JSON.stringify(resp.usuario) );
                  localStorage.setItem( 'token'    , resp.token                   );

                  // saves the user and token
                  this.usuario = resp.usuario ;
                  this.token   = resp.token ;

                  return resp;

                })
             );

  }


  // returns if an user is loggedIn
  isLoggedIn(): boolean {

     // if we have a token and is a valid token )
     return ( this.token && this.token.length > 0);
  }


  // logging out
  logOut(): void {

    // clears this variables
    this.usuario = null ;
    this.token   = ''   ;

    // remove from the localStorage
    localStorage.removeItem( 'id'        );
    localStorage.removeItem( 'usuario'   );
    localStorage.removeItem( 'token'     );

    // redirects to login
    this.router.navigate(['/login']);

  }


  // loads the token and the user
  loadToken(): void {

    // if the token exists
    if ( localStorage.getItem('token') ) {

        this.token    = localStorage.getItem('token');
        this.usuario  = JSON.parse( localStorage.getItem('usuario'));

    } else {

        // no token (user is not logged in )
        this.token = '';
        this.usuario = null;

    }

  }



  // creates an user ( post request )
  createUser(user: Usuario): Observable<any> {

      const url = URL_SERVICIOS + '/usuario';

      // makes to post request to create the user
      return this.http.post<any>(url, user )
               .pipe( map( (resp: any) => {

                      // Sweet alert
                      swal('User Registered!', user.email, 'success');
                      return resp;

                      })
                );

  }

}
