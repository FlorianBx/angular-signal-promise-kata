import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../Models/cats';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private apiUrl = 'https://api.thecatapi.com/v1/images/search';
  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiUrl}?limit=10`);
  }

  getCatById(id: number): Observable<Cat> {
    return this.http.get<Cat>(`https://api.thecatapi.com/v1/images/${id}`);
  }
}
