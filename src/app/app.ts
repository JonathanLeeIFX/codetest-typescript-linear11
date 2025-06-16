import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as conversion from './conversion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  value: string = '';

  toDecimal() {
    console.log('toDecimal()');
  }

  toLinear11() {
    console.log('toLinear11()');
  }
}
