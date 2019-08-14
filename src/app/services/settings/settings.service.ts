import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // default values for settings
  settings: MyThemeSettings = {
    themeURL: 'assets/css/colors/blue.css' ,
    theme: 'blue'
  };


  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.loadSettings();
  }

  saveSettings() {

    // saves the settings in the localStorage in text with JSON.stringify
    localStorage.setItem('settings', JSON.stringify( this.settings ) );

  }


  loadSettings() {

    // Checks if settings exits in the localStorage
    if ( localStorage.getItem('settings') ) {

      this.settings = JSON.parse( localStorage.getItem('settings') );


    } else {

      // using default values

    }

    // applies the saved settings on the localStorage
    this.applySettings( this.settings.theme );

  }


  applySettings( theme: string) {

      const themeRef = `assets/css/colors/${theme}.css`;
      this._document.getElementById('theme').setAttribute('href', themeRef );


      // saves the settings in localStorage
      this.settings = {
        themeURL : themeRef,
        theme: theme
      };
      this.saveSettings();
  }

}


// interfaces for MyThemeSettings
interface MyThemeSettings {
    themeURL: string;
    theme: string;
}
