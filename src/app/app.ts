import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Example } from './example/example';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Example],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-part3';
  toggleDiv = false;

  display = true;

  hideShowDiv() {
    this.display = !this.display;

    // if (this.display == true) {
    //   this.display = false;
    // } else {
    //   this.display = true;
    // }
  }

  // showDiv() {
  //   console.log('Called');
  //   this.display = true;
  // }

  toggle2() {
    this.toggleDiv = !this.toggleDiv;

    // if (this.toggleDiv == true) {
    //   this.toggleDiv = false;
    // } else {
    //   this.toggleDiv = true;
    // }
  }
}
