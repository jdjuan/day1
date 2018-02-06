import { Util } from './util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Util {
  name = 'Rex';

  constructor() {
    super();
    this.test();
  }
}
