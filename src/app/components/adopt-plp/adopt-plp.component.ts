import { Component } from '@angular/core';
import { Animal } from 'src/app/animal';
import { AdoptService } from 'src/app/services/adopt.service';

@Component({
  selector: 'app-adopt-plp',
  templateUrl: './adopt-plp.component.html',
  styleUrls: ['./adopt-plp.component.css']
})
export class AdoptPlpComponent {

  animals: Animal[] = [];
  

  constructor(private service : AdoptService){}

  ngOnInit(){
    this.service.getAnimals().subscribe((list)=> (this.animals=list));
    console.log(this.animals)
  }

}
