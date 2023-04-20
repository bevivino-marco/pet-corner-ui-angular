import { Component } from '@angular/core';
import { AdoptService } from './services/adopt.service';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pet-corner-ui-angular';
  adoptOpen: boolean = true;
  therapyOpen: boolean = false;
  trainingOpen: boolean = false;
  sittersOpen: boolean = false;

  constructor(){
    
  }

  ngOnInit(){
    
  }

  switchAdoptStatus(): void {
    if (!this.adoptOpen){
    this.adoptOpen=!this.adoptOpen;
    this.therapyOpen = false;
    this.trainingOpen = false;
    this.sittersOpen = false;
    }
    console.log(this.adoptOpen,this.therapyOpen, this.trainingOpen , this.sittersOpen);
  }
  switchTherapyStatus(): void {
    if (!this.therapyOpen){
      this.therapyOpen=!this.therapyOpen;
      this.adoptOpen = false;
      this.trainingOpen = false;
      this.sittersOpen = false;
    }
    console.log(this.adoptOpen,this.therapyOpen, this.trainingOpen , this.sittersOpen);
  }
  switchTrainingStatus(): void {
    if (!this.trainingOpen){
      this.trainingOpen=!this.trainingOpen;
      this.therapyOpen = false;
      this.adoptOpen = false;
      this.sittersOpen = false;
    }
    console.log(this.adoptOpen,this.therapyOpen, this.trainingOpen , this.sittersOpen);
  }
  switchSittersStatus(): void {
    if (!this.sittersOpen){
      this.sittersOpen=!this.sittersOpen;
      this.therapyOpen = false;
      this.trainingOpen = false;
      this.adoptOpen = false;
    }
    console.log(this.adoptOpen,this.therapyOpen, this.trainingOpen , this.sittersOpen);
  }

}
