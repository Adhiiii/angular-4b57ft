import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstarp/datepicker';


@Component ({
 
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>
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
  dateOfBirth = new Date(2019, 9, 21);
  photoPreview = false;

  constructor() { 
    this.datePickerConfig = Object.assign({},
    {containerClass: 'theme-dark-blue',
    showWeekNumbers: false,
    maxDate: new Date(2019, 9, 25),
    dateInputFormat: 'DD,MMM,YYYY',
    })
  }

  togglephotoPreview(){
    this.photoPreview = !this.photoPreview;
  }

  ngOnInit() { }

  saveEmployee(empForm: NgForm):void {
    console.log(empForm.value);
  }
}
