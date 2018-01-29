import { Injectable } from '@angular/core';

@Injectable()
export class TemplateService {

  constructor() { }

  test(){
      console.log("You are in the test service in the template services.");
  }

}
