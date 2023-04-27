import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    /*'Content-Length':'<calculated when request is sent>',
    'Host':'<calculated when request is sent>',*/
    //'Accept':'*/*',
    //'Accept-Encoding':'gzip, deflate, br',
    //'Connection':'keep-alive',
  }),
};



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  apiUrl: string = "http://localhost:8765/profile/v2/user/save";
  constructor(private http: HttpClient) { }
  
  addUser(user: User): Observable<User>{
    console.log(JSON.stringify(user))
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }
  /*
  { 
"address"
: 
"via parrocchia 3",
"city"
: 
"Mathi",
"cod_fisc"
: 
"egtge",
"country"
: 
"Italia",
"name"
: 
"MARCO",
"password"
: 
"password",
"piva"
: 
"sdvv s",
"roles"
: 
[],
"username": "marco.bevivino@mail.com"
} */
}
