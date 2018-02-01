import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// Importing services
import { TemplateService } from '../../services/template.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

    respData;
    respString;
    method = 'None';
    testVar;

    constructor(private route: ActivatedRoute, private router: Router, private testService: TemplateService, private httpService: HttpService ) {

        console.log('the test component is loaded.');
      }

    ngOnInit() {
        console.log('The test component is live');
    }

    callTemplateService(){
       console.log('Calling the template service');
       this.testService.test();
    }

    doGetRequest(){
      console.log('Doing a get request');
      this.method = 'GET';

      this.httpService.getRequest({foo: 'bar'})
      .then((data) => {
          console.log(data);
          this.respData = data;
          this.respString = JSON.stringify(data, null, 4);
      })
      .catch((err) => {
          console.log("There is an issue with " + this.method +  " request. Please try again");
          console.log(err);
          this.respString = "ERROR: Please try again."
          this.respData = {success: false};
      });
    }

    doPostRequest(){
      console.log('Doing a post request');
      this.method = 'POST';

      // This is form body, sent as JSON
      let body = {
        foobody: 'FooerBoody'
      };

      // URL Parameters
      let params = {
        fooParam: 'fooerparam'
      };

      this.httpService.postRequest(body, params)
      .then( data => {
          console.log('The post request is a success');
          console.log(data);
          this.respData = data;
          this.respString = JSON.stringify(data, null, 4);
      });
    }

    // Input handlers come here.

    handleUserInput(){
      console.log("The user has entered something");
    }

}
