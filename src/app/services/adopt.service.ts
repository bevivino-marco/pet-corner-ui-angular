import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../animal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdoptService {

  private apiUrl="http://localhost:8765/adopt/v2/animals/page/1"
  constructor(private http: HttpClient) { }

  getAnimals(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
    
  }
}
