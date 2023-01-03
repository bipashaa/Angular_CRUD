import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  employeeData: any = {};

  constructor(
    public empservice: EmployeeServicesService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.empservice.getEmployee(this.id).subscribe((data: {}) => {
      this.employeeData = data;
    });
  }

  // Update employee data
  updateEmployee() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.empservice
        .updateEmployee(this.id, this.employeeData)
        .subscribe((data) => {
          this.router.navigate(['/employees-list']);
        });
    }
  }
}
