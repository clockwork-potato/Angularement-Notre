import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BouffeService {
  constructor(private _http: HttpClient) {}

  getRandomMeal(): Observable<any> { 
    return this._http.get('https://www.themealdb.com/api/json/v1/1/random.php');
  }
}