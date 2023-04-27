import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-registration',
  templateUrl: './profile-registration.component.html',
  styleUrls: ['./profile-registration.component.css']
})
export class ProfileRegistrationComponent {
  @Input() username!:string;


  constructor(){

  }

  onSubmit(){
    console.log(this.username)
  }




}
