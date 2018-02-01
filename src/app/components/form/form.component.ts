import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formModel = {
      email: "",
      password: ""
  }

  loopData = [
    'one',
    'many'
  ];


  constructor() { }

  ngOnInit() {
      console.log("Running the form component");
  }

  formSubmitted(){
    console.log("The form has been submitted");
    console.log(this.formModel);
  }

}
