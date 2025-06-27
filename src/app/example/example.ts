import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  imports: [],
  templateUrl: './example.html',
  styleUrl: './example.css',
})
export class Example {
  exdata: string = 'aman';
  con: boolean = false;

  constructor() {
    if (this.exdata === 'aman') {
      this.con = true;
    } else {
      this.con = false;
    }
  }

  aman() {
    this.con = !this.con;
    this.exdata = true ? 'aman' : 'not aman';
  }
}
