import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


import { UsuarioService } from '../usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public usuarioService: UsuarioService,
              public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

      // console.log( 'Paso por login Guard');

      if ( this.usuarioService.isLoggedIn() ) {

          // console.log('passed the guard');

           return true;
      } else {

          // console.log('blocked by the guard');

           // navigates to login page
           this.router.navigate(['/login']);
           return false;
      }

  }


}
