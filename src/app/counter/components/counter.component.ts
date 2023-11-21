import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}} </h3>

  <button (click)="increaseBy(+1)">Incremente</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">Decrementa</button>


  `
})

export class CounterComponent {
  public title:string = 'Hola mundo';
  public counter: number = 30;


  increaseBy(value: number):void {
    this.counter += value;
  }

  resetCounter() {
    this.counter =10;
  }
}
