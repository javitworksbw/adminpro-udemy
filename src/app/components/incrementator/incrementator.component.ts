import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styleUrls: ['./incrementator.component.scss']
})
export class IncrementatorComponent implements OnInit {

  // hace referencia al elemento de la pagina con identificador txtProgress
  // de tipo ElementRef
  @ViewChild('txtProgress') txtProgress: ElementRef;


  // Input properties
  @Input('leyend') leyend:   string = 'leyend';
  @Input() progress: number = 50;

  // Output properties

  // emits a number ( the number of the incrementator )
  @Output() changeProgressValue: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() { }


  changeValue(value: number) {

    if ( this.progress >= 100  && value > 0) {
      this.progress = 100;
      return;
    }

    if ( this.progress <= 0  && value < 0) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + value;

    // calls the event emitter sending the progress value
    this.changeProgressValue.emit( this.progress );

  }


  // event handler ngModelChange
  onChangeProgress(newValue: any ) {


    // check for valid values
    if ( newValue && (newValue >= 100) ) {
        this.progress = 100;
    } else if ( newValue && (newValue <= 0 ) ) {
        this.progress = 0;
    } else {
        // updates the progress with this new value
        this.progress = newValue;
    }

    // sets the value to the progress value
    // referencia a través de typescript al elemento con identificador #txtProgress
    this.txtProgress.nativeElement.value = this.progress;


    // calls the event emitter sending the progress value
    this.changeProgressValue.emit( this.progress );

    // asigno el foco al elemento
    this.txtProgress.nativeElement.focus();

  }


}
