import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';

// sweet alert
import swal from 'sweetalert';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  // image for the user profile
  imageToUpload: File;
  imageTemp: any ;


  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {

    // get the usuario data
    this.usuario = this.usuarioService.usuario;

  }

  saveForm(usuario: Usuario) {

    // updates the values
    this.usuario.nombre = usuario.nombre ;

    // if the user is not google user identified , let him change the email
    // google users are not allowed to change the email
    if (!this.usuario.google ) {
      this.usuario.email  = usuario.email  ;
    }


    this.usuarioService.updateUser( this.usuario )
      .subscribe( res => {

          // console.log( res );
          if ( res.ok ) {

              this.usuario = res.usuario ;

          }

      });

  }


  // called everytime the user selects one image to upload
  selectImageFile( file: File ) {

    // console.log( event );

    // validate if file is selected  ( no cancel button pressed )
    if ( !file ) {
      this.imageToUpload = null;
      return;
    }

    // check if the selected file is an image
    if ( file.type.indexOf('image') < 0 ) {

      this.imageToUpload = null;

      // Sweet alert
      swal('Only Images!', ' The selected file is not an Image!', 'error');
      return;

    }


    // Pure javascript to preview the image
    const reader = new FileReader();
    const urlImageTemp = reader.readAsDataURL( file );

    reader.onloadend = () => {

      // console.log( reader.result );
      this.imageTemp = reader.result;

    };

    // image file to upload
    this.imageToUpload = file ;

  }


  // takes the selected image and updates the profile photo
  updatePhoto() {

    const id = this.usuario._id ;

    // changes the user image
    this.usuarioService.changeImage( this.imageToUpload, id );

  }



}
