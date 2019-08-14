import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';



@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  // @Inject(DOCUMENT) private _document: Document

  // forma de dependence injection para acceder a elementos del DOM
  // tslint:disable-next-line:variable-name
  constructor(public settings: SettingsService) { }

  ngOnInit() {

    // sets the check icon on the selected color
    this.setCheckIcon();

  }



  /*
  $("*[data-theme]").click(function(e){
    e.preventDefault();
      var currentStyle = $(this).attr('data-theme');
      store('theme', currentStyle);
      $('#theme').attr({href: 'css/colors/'+currentStyle+'.css'})
  });

  var currentTheme = get('theme');
  if(currentTheme)
  {
    $('#theme').attr({href: 'css/colors/'+currentTheme+'.css'});
  }
  
  // color selector
$('#themecolors').on('click', 'a', function(){
      $('#themecolors li a').removeClass('working');
      $(this).addClass('working')
    });

*/

  changeThemeColor(color: string, element: any) {

      // applies the check
      this.applyCheck( element );

      // apply the settings for this color
      this.settings.applySettings( color );

  }


  applyCheck( link: any ) {

    // array of selectors ( vanilla javascript )
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      // removes the class
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  setCheckIcon() {

    const selectores: any = document.getElementsByClassName('selector');

    const settingsTheme = this.settings.settings.theme ;

    for (const ref of selectores) {

      if ( ref.getAttribute('data-theme') === settingsTheme ) {
         ref.classList.add('working');
         break;
      }

    }
  }

}
