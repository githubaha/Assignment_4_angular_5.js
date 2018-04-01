import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public array = [];

  storeOutput(number) {
      this.array.push(number);
  }




















  // secretPassword: string = '';
  // showthis: string;
  // numbers: number = 0;
  // columns: string;
  // storage = [];

  // onClick() {
  //   if (this.secretPassword === '') {
  //     this.secretPassword = 'Assignment_3';
  //   }

  //   this.numbers = this.numbers + 1;
  //   this.showthis = 'Column ' + this.numbers;
  //   this.storage.push(this.showthis);
  // } 

  // this.storage.forEach(element => {
  //   this.columns = element;
  //   console.log(element);
  // });
   //username: string = '';
   //disabled: boolean = false;
   
  //  inputEvent(event: Event) {
  //     this.username = (<HTMLInputElement>event.target).value;
  //     this.disabled = true;
  //     if (this.username === '') {
  //        this.disabled = false;
  //     }
  //  }

  //  onClick() {
  //      this.disabled = false;
  //      this.username = '';
  //  }
   
}
