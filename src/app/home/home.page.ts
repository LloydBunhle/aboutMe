import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  today: number;

  constructor() {
    // get the current time and date
    this.today = Date.now();
  }

}
