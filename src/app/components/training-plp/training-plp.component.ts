import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Trainer } from 'src/app/trainer';
import { User } from 'src/app/user';

@Component({
  selector: 'app-training-plp',
  templateUrl: './training-plp.component.html',
  styleUrls: ['./training-plp.component.css']
})
export class TrainingPlpComponent {
  trainers?: Trainer []= []

  constructor(private service : UsersService){}

  ngOnInit(){
    this.service.getUsers().subscribe(list => this.trainers= list);
  }

}
