import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor() { }


  // myUploadFile function
  myUploadFile( file: File , userType: string , id: string ) {

      // make a promise to notificate that this ajax call finished
      return new Promise((resolve, reject) => {

          // Pure javascript ( the payload to upload from the form )
          const formData = new FormData();


          // MAKE PURE AJAX REQUEST

          // making ajax request
          const xhr = new XMLHttpRequest();

          // form data ( image form field)
          formData.append('image', file, file.name);

          // event handler for onreadystatechange
          xhr.onreadystatechange = () => {

            // if finished
            if (xhr.readyState === 4) {

              // correct status
              if (xhr.status === 200) {

                // console.log('Image File Uploaded');

                // we passed the data converted to JSON object and finish
                resolve( JSON.parse(xhr.response) );

              } else {

                // fail in the file upload
                console.log('Error: Image File Uploaded');
                reject(xhr.response);

              }


            }
          };

          // url of the upload service
          let url = URL_SERVICIOS + '/upload/' + userType + '/' + id ;

          xhr.open( 'POST', url , true);
          xhr.send( formData );


     });




  }

}
