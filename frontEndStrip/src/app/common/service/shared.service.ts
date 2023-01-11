import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}
  baseURL: any = 'http://localhost:1300';

  getCheckoutLink(data: any) {
    return this.http.post(this.baseURL + '/create-checkout', data);
  }
}
