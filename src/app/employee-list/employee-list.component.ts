import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  Employee: any = [];

  constructor(
    public empservice: EmployeeServicesService,
    public router: Router
  ) {}

  ngOnInit() {
    this.loadEmployees();
  }
  // Get employees list
  loadEmployees() {
    return this.empservice.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
      console.log(this.Employee);
    });
  }

  deleteEmployee(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.empservice.deleteEmployee(id).subscribe((data) => {
        this.router.navigate(['/employees-list']);
      });
    }
  }
}
