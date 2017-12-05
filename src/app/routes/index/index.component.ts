import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

interface Route {
  name: string
}
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class indexComponent {
  title = 'INDEX';
  routes: Array<Route>;
  private data: Observable<string>;
  private values: Array<string> = [];
  private status: string;
  private anyErrors: boolean;
  private finished: boolean;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    ) {}
  router_checker_button() {
    console.log("hello")
    console.log(this.router)
    console.log(this.activatedroute)
    this.router.navigate(['/word']);
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
          // console.log(observer);
          observer.next('First Thing');
          observer.next('Second Thing');
          observer.complete();
      });

      let subscription = this.data.forEach(v => this.values.push(v))
        .then(() => this.status = "Ended");
  }
}
