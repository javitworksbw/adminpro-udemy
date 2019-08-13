import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IncrementatorComponent } from './incrementator/incrementator.component';


@NgModule({
  declarations: [
    IncrementatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IncrementatorComponent
  ]
})
export class ComponentsModule { }
