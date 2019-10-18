import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employee.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeesComponent },
  {path: 'create', component: CreateEmployeesComponent },
  {path: '', redirectTo: '/list' }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ListEmployeesComponent, CreateEmployeesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
