import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

interface Route {
  name: string
}
@Component({
  selector: 'app-colorword',
  templateUrl: './colorword.component.html',
  styleUrls: ['./colorword.component.css']
})
export class colorwordComponent {
  title = 'Color the Word';

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
}
