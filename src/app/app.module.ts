import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ListEmployeesComponent } from './employees/list-employees.component';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListEmployeesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
