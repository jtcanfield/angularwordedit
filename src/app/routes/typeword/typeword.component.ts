import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgForm, FormControl} from '@angular/forms';

@Component({
  selector: 'app-typeword',
  templateUrl: './typeword.component.html',
  styleUrls: ['./typeword.component.css']
})
export class typewordComponent {
  title = 'Type a Word';
  private alerts = "";
  // word = new FormControl();
  private word = "";
  private data: Observable<string>;

  constructor() {
  }

  input_typed(event: any) {
    console.log(event.code)
    if (event.code === "Space"){
      this.word = this.word;
    } else {
      this.word = event.target.value;
    }
    this.alerts = "";
  }
  submit_word(){
    if (this.word.length < 1 || this.word == " " || this.word == undefined || this.word === "Please Enter a Word"){
      this.alerts = "Please Enter a Word";
    } else {
      console.log("Valid")
    }
  }
}
