import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string [] = ['Capitán América', 'Iron Man', 'Thor', 'Spider-Man','Black Panther',
  'Hulk', 'Doctor Strange'];

  public deleteHeros?: string;

  removeLastHero():void {
    this.deleteHeros = this.heroNames.pop();
  }

}
