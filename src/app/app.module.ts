import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeesComponent },
  {path: 'create', component: CreateEmployeesComponent },
  {path: '', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), BsDatepickerModule.forRoot() ],
  declarations: [ AppComponent, ListEmployeesComponent, CreateEmployeesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
