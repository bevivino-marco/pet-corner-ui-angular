import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile-registration',
  templateUrl: './profile-registration.component.html',
  styleUrls: ['./profile-registration.component.css']
})
export class ProfileRegistrationComponent {
  /*@Input() name!: string;
  @Input() surname!: string;
  @Input() age!: number;
  @Input() owner= "";
  @Input() locality!: string;
  @Input() personalDescription!: string;
  @Input() animalsAllowed!: string;
  @Input() sizeAllowed!: number;
  @Input() trainer!: string;
  @Input() sitter!: string;
  @Input() email!: string;*/
  @Input() name!: string;
  @Input() username!: string;
  @Input() password!: string;
  @Input() roles!: [];
  @Input() cod_fisc!: string;
  @Input() piva!: string;
  @Input() country!: string;
  @Input() city!: string;
  @Input() address!: string;
  @Output() submitUser: EventEmitter<User> = new EventEmitter();

  constructor(private service: RegistrationService){

  }

  /*onSubmit(form : NgForm){
    const newUser: User = {
      name: this.name,
      surname: this.surname,
      age: this.age,
      owner: "",
      locality: this.locality,
      personalDescription: this.personalDescription,
      animalsAllowed: this.animalsAllowed,
      sizeAllowed: this.sizeAllowed,
      serviceOffered: this.trainer? "trainer": "sitter",
      email: this.email
    }
    console.log(newUser)
    form.reset();
  }*/

  onSubmit(form : NgForm){
    const newUser: User = {
      name: this.name,
      username: this.username,
      password: this.password,
      roles: [],
      cod_fisc: this.cod_fisc,
      piva: this.piva,
      country: this.country,
      city: this.city,
      address: this.address

    }
    this.service.addUser(newUser).subscribe();
  }


}
