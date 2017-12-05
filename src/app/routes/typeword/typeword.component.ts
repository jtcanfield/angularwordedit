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
    this.data = new Observable(observer => {
      // console.log(this);
      // console.log(this.data);
      // console.log(observer);
      console.log(event.target.value)
      this.word = event.target.value;
        // this.word = "Started";
        // observer.next('First Thing');
        // observer.next('Second Thing');
        // observer.complete();
    });

    let subscription = this.data.forEach(v => this.values.push(v))
      .then(() => this.status = "Ended");
  }
}
