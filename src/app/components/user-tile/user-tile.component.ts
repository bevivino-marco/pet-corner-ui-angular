import { Component, Input } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css']
})
export class UserTileComponent {
    @Input() user!: User;


    constructor(){}

    

}
