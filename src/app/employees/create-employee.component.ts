import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './app/models/department.model';


@Component ({
 
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  departments: Department[]  = [
    {
      id: 0,
      name: 'Select Department'
    },
    {
      id: 1,
      name: 'Help Desk'
    },
    {
      id: 2,
      name: 'HR'
    },
    {
      id: 3,
      name: 'IT'
    },
    {
      id: 4,
      name: 'Payroll'
    }
  ]

  department = 0;
  isactive = false;
  gender = 'male';
  cntctpref = 'phnumber';

  constructor() { }

  ngOnInit() { }

  saveEmployee(empForm: NgForm):void {
    console.log(empForm.value);
  }
}
