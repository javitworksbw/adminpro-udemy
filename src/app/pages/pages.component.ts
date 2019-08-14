import { Component, OnInit } from '@angular/core';


// we declare that this function is defined in another 
// script file outside typescript
// to initialize the jquery plugins
// it is defined in js/custom.js 
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // llama a la funcion de inicializacion de plugins
    // para que funcionen menus y sus plugins jquery
    init_plugins();
  }

}
