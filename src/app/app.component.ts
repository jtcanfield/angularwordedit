import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private data: Observable<Array<number>>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;

  constructor() {
  }

  hello_button_clicked() {
      this.data = new Observable(observer => {
          // setTimeout(() => {
          //     observer.next(42);
          // }, 1000);
          //
          // setTimeout(() => {
          //     observer.next(43);
          // }, 2000);
          //
          // setTimeout(() => {
          //     observer.complete();
          // }, 3000);
          this.status = "Started";
          observer.next("First Thing");
          observer.next("Second Thing");
          observer.complete();
      });

      let subscription = this.data.forEach(v => this.values.push(v))
        .then(() => this.status = "Ended");
  }
}
