import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // menu array elements
  menu = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard'   , url: '/dashboard'    },
        { titulo: 'ProgresBar'  , url: '/progress'     },
        { titulo: 'Graficas'    , url: '/graficas1'    }

      ]
    }
  ];

  constructor() { }
}
