import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user!: User
  constructor(private service: LoginService ){}

  ngOnInit(): void {
    this.service.getUserInfo().subscribe((user)=> this.user=user);
  }




}
