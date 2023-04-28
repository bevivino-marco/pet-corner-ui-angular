import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Token } from 'src/app/token';

@Component({
  selector: 'app-profile-login',
  templateUrl: './profile-login.component.html',
  styleUrls: ['./profile-login.component.css']
})
export class ProfileLoginComponent {
  @Input() username!: string;
  @Input() password!: string;
  token: Token ={
    access_token:"",
    refresh_token:""
  }
  badRequest: boolean;
  constructor(private service: LoginService){
    this.badRequest=false;
    
  }
  onSubmit(form : NgForm){

    this.service.logUser(this.username,this.password).subscribe((tokens)=> {
        if (tokens.access_token.length>=0){
          this.service.setToken(this.token);
          this.token=tokens
          console.log(this.token.access_token)
          this.service.setlogStatusActive(true);
          this.service.getLogStatusActive().subscribe((status)=> {console.log(status)})
        
        }
      },
        (err) => {
          console.log('HTTP Error', err);
          this.badRequest=true;
          this.service.setlogStatusActive(false)
      }
      
     );

    
  }

}
