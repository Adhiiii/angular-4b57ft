import { Component, OnInit } from '@angular/core';
import { Employee } from './app/models/employee.mod';

@Component ({
  
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[]  = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@xyz.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'https://cdn.jsdelivr.net/gh/Adhiiii/angular-4b57ft@master/src/assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2233458945,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'https://cdn.jsdelivr.net/gh/Adhiiii/angular-4b57ft@master/src/assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 7788551584,
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'https://cdn.jsdelivr.net/gh/Adhiiii/angular-4b57ft@master/src/assets/images/john.png'
    }
  ]
  constructor() { }

  ngOnInit() { }
}