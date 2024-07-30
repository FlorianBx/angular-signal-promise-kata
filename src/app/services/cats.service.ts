import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http: HttpClient) { }

  getCats() {
    return this.http.get('https://api.thecatapi.com/v1/images/search?limit=10');
  }

  getCatById(id: number) {
    return this.http.get(`https://api.thecatapi.com/v1/images/${id}`);
  }
}
