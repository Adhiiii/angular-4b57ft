import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './app/models/department.model';


@Component ({
 
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  gender = 'male';
  cntctpref = 'email';
  isactive = true;
  department = '0';
  constructor() { }

  ngOnInit() { }

  saveEmployee(empForm: NgForm):void {
    console.log(empForm.value);
  }
}
