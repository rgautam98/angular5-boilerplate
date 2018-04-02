import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpHeaderResponse } from '@angular/common/http/src/response';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getRequest(params): any {
    // Setting Headers

    const headers = {foo: 'bar'};

    return this.http.get('http://httpbin.org/get', {
      headers: headers,
      params: params // URL parameters
    }).toPromise();
  }

  postRequest(body, params): any {
    // Setting Headers

    const headers = { G: 'RG' };

    return this.http.post('http://httpbin.org/post', body, {
      headers: headers,
      params: params, // URL parameters,
    })
    .toPromise();
  }

  getTableData(): any {
    // Setting Headers

    // const headers = { foo: 'bar' };

    return this.http.get('http://localhost:4192/api/v1/subjects', {
    }).toPromise();
  }



}
