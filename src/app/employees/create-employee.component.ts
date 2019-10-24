import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Department } from "./app/models/department.model";
import { BsDatepickerConfig } from "ngx-bootstarp/datepicker";
import { Employee } from "./app/models/employee.model";

@Component({
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeesComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: "male",
    contactPreference: "email",
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: '-1',
    isactive: true,
    photoPath: null
  };

  departments: Department[] = [
    /* {
      id: 0,
      name: "Select Department"
    }, */
    {
      id: 1,
      name: "Help Desk"
    },
    {
      id: 2,
      name: "HR"
    },
    {
      id: 3,
      name: "IT"
    },
    {
      id: 4,
      name: "Payroll"
    },
    {
      id: 5,
      name: "Finance"
    }
  ];

  photoPreview = false;
  //deptSelected = false;

  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        maxDate: new Date(2019, 9, 25),
        dateInputFormat: "DD,MMM,YYYY"
      }
    );
  }

  togglephotoPreview() {
    this.photoPreview = !this.photoPreview;
  }

  /* onDepartmentSelected(value: string) {
    //console.log("the selected value is " + value);
    if (value == '0') {
      this.deptSelected = false;
    }
    else {
      this.deptSelected = true;
    }
  } */

  ngOnInit() {}

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
