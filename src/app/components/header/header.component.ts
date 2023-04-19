import { Component, EventEmitter, Output } from '@angular/core';
import { AdoptService } from './../../services/adopt.service';
import { Animal } from 'src/app/animal';
import { User } from 'src/app/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Output() adoptClick: EventEmitter<Animal> = new EventEmitter();
  @Output() trainingClick: EventEmitter<Animal> = new EventEmitter();
  @Output() therapyClick: EventEmitter<Animal> = new EventEmitter();
  @Output() sittersClick: EventEmitter<Animal> = new EventEmitter();


  ngOnInit(): void{

    
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

}
