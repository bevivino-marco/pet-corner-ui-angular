import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdoptService } from './../../services/adopt.service';
import { Animal } from 'src/app/animal';
import { User } from 'src/app/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  @Output() adoptClick: EventEmitter<Animal> = new EventEmitter();
  @Output() trainingClick: EventEmitter<Animal> = new EventEmitter();
  @Output() therapyClick: EventEmitter<Animal> = new EventEmitter();
  @Output() sittersClick: EventEmitter<Animal> = new EventEmitter();
  @Output() registrationClick = new EventEmitter();
  loginFlag!: boolean
  constructor(private loginService: LoginService){

  }

  ngOnInit(): void{
    this.loginService.getLogStatusActive().subscribe((flag)=> {this.loginFlag=flag
    console.log(flag)});

    
  }

  onTherapyClick(): void{
    this.therapyClick.emit();
  }

  onTrainingClick(): void{
    this.trainingClick.emit();
  }

  onSittersClick(): void{
    this.sittersClick.emit();
  }

  onAdoptClick(): void{
    this.adoptClick.emit();
  }
  onRegistrationClick(): void{
    this.registrationClick.emit();
  }


  logOut(){
    this.loginService.setlogStatusActive(false);
    this.loginService.setToken({access_token:"",refresh_token:""})
  }

}
