import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component ({
 
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  saveEmployee(empForm: NgForm):void {
    console.log(empForm.value);
  }
}
