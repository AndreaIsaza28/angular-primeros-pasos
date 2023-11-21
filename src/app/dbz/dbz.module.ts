import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListDComponent } from "./components/list/list.component";
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  exports : [
    MainPageComponent
  ],
  declarations: [
    MainPageComponent,
    ListDComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class DbzModule {

}
