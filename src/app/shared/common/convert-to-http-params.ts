import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConvertToHttpParams {

  constructor(private http: HttpClient) {
  }

  start(params: { [name: string]: string; } = null) {
    let p = new HttpParams();
    if (params) {
      for (const key of Object.keys(params)) {
        p = p.set(key, params[key]);
      }
    }
    return { params: p };
  }
}
