import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('output') number = new EventEmitter<number>();
  public id: any;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    let num = 1;
    this.id = setInterval(() => {
      this.number.emit(num++);
    }, 1000);
  }
  
  onPause() {
    clearInterval(this.id);
  }

}
