import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get(`${this.BASE_URL}/users`);
  }

  getUser(id: string) {
    return this._http.get(`${this.BASE_URL}/users/${id}`);
  }

  getSinglePhoto(): Observable<any> {
    return interval(1000).pipe(
      switchMap(() => this._http.get<any[]>('https://jsonplaceholder.typicode.com/photos')),
      map(photos => photos[0])
    );
  }
  




  //pour t'entrainer rajoute eu deux autres pages
  getPosts() {
    return this._http.get(`${this.BASE_URL}/posts`);
  }

  getComments() {
    return this._http.get(`${this.BASE_URL}/comments`);
  }
}
