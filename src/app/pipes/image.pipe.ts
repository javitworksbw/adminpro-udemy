import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {


  // we will receive the image name and we have to construct the complete url

  // we have to construct complete url for the image given 
  // the user image as a string
  //
  // This is what we construct , because is the endpoint for the generated image 
  // or empty image if no image is supplied
  //
  // http://localhost:3000/images/:userType/:img
  // http://localhost:3000/images/usuario/7383783873-788.jpg

  transform(img: string, userType: string = 'usuario'): any {


    let url = URL_SERVICIOS + '/images';

    // if no image is supplied returns a dummy
    if ( !img ) {
      return url + '/usuario/xxx';
    }

    // if it is a google image ( of the profile )
    // do nothing with the image and return it as it
    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    switch (userType) {

      case 'usuario':
          url += '/usuario/' + img;
          break;
      case 'medico':
          url += '/medico/' + img;
          break;
      case 'hospital':
          url += '/hospital/' + img;
          break;

      default:
        url = '/usuario/xxx';
        break;
    }

    return url;

  }

}
