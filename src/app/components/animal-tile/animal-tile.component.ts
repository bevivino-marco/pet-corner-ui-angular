import { Component, Input } from '@angular/core';
import { Animal } from 'src/app/animal';

@Component({
  selector: 'app-animal-tile',
  templateUrl: './animal-tile.component.html',
  styleUrls: ['./animal-tile.component.css']
})
export class AnimalTileComponent {
  @Input() animal!: Animal;

  constructor(){}

  onContattaClick(){
    console.log("contatta")
  }

}
