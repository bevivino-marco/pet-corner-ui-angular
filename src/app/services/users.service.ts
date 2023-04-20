import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<Object>{
    return this.http.get("https://jsonplaceholder.cypress.io/users");
  }
}
