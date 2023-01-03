import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent implements OnInit {
  @Input() employeeDetails = {
    id: null,
    firstName: '',
    lastName: '',
    emailId: '',
  };

  constructor(
    public empservice: EmployeeServicesService,
    public router: Router
  ) {}

  ngOnInit() {}

  addEmployee(dataEmployee: any) {
    this.empservice
      .createEmployee(this.employeeDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/employees-list']);
      });
  }
}
