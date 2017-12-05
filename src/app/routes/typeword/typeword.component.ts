import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-typeword',
  templateUrl: './typeword.component.html',
  styleUrls: ['./typeword.component.css']
})
export class typewordComponent {
  title = 'Type a Word';
  private word = "";
  private data: Observable<string>;

  constructor() {
  }

  input_typed(event: any) {
    this.word = event.target.value;
  }
}
