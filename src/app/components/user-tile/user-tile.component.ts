import { Component, Input } from '@angular/core';
import { Trainer } from 'src/app/trainer';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css']
})
export class UserTileComponent {
    @Input() user!: Trainer;


    constructor(){}

    

}
