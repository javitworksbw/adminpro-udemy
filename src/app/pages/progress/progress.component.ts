import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  progressComp1: number = 0;
  progressComp2: number = 0;


  constructor() { }

  ngOnInit() {
  }

  updateBar1(event: number ) {

    // updates this value with the received value from the incrementator component
    this.progressComp1 = event;

  }

  updateBar2(event: number ) {

    // updates this value with the received value from the incrementator component
    this.progressComp2 = event;

  }


}
