import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Token } from '../token';
import { User } from '../user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8765/profile/v2";
  token!: Token;
  username!: string;
  logStatusActive: BehaviorSubject<boolean>;
  constructor(private http: HttpClient) { 
    this.logStatusActive= new BehaviorSubject<boolean>(false);
  }

  


  logUser(username:string, password:string): Observable<Token>{
    const body = new HttpParams()
    .set('username', username)
    .set('password', password);
    console.log(username)
    this.username=username;// Username è undefined dopo la logine
    console.log(this.username)

    return this.http.post<Token>(this.apiUrl+"/login",body, httpOptions);
  }
  setToken(token: Token) {
    this.token=token;
    console.log("TOKEN CHANGED: "+token)
  }

  getToken(): Token{
    return this.token;
  }

  setlogStatusActive(active:boolean){
    this.logStatusActive.next(active);
  }

  getLogStatusActive(): Observable<boolean>{
    return this.logStatusActive.asObservable();
  }

  getUserInfo():Observable<User>{
    return this.http.get<User>(this.apiUrl+"/user-info/"+this.username, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+this.token,
      }),
    })

  }

}
