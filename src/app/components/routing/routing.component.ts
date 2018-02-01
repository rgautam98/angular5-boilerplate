import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  routeParams = {
    routes: {},
    query: {}
  };
  json = JSON;

  constructor(private route: ActivatedRoute) {
      console.log('In the routing component');
  }

  ngOnInit() {

    /*
      if visited the route
      
        /route;one=any;main=gain?foo=bar
        routeParam =  {
                          "routes": {
                              "one": "any",
                              "main": "gain"
                          },
                          "query": {
                              "foo": "bar"
                          }
                      }
    */
    console.log('the route params are');
    this.route.params.subscribe(routeParams => {
      console.log(routeParams);
      this.routeParams.routes = routeParams;
    });

    console.log('Getting the query string');

    this.route.queryParams.subscribe(queryParams => {
        console.log('query string is');
        console.log(queryParams);
        this.routeParams.query = queryParams;
    });

  }

}
