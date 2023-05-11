import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getPosts() {
    return this._http.get(`${this.BASE_URL}/posts`);
  }

  getComments() {
    return this._http.get(`${this.BASE_URL}/comments`);
  }
}
