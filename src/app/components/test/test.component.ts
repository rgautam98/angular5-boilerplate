import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
      console.log("the test component is loaded.")
  }

  ngOnInit() {
      console.log("The test component is live");
  }

}
