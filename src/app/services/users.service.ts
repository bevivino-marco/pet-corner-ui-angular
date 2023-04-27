import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from '../trainer';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: string = "http://localhost:8765/trainer/v2/trainers/page/1";
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<Trainer[]>{
    return this.http.get<Trainer[]>(this.apiUrl);
  }
}
