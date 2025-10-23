import { Component } from '@angular/core';
import { EmpService } from '../../services/emp-service';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  employees = [];

  constructor(private employeeService: EmpService) {}

  ngOnInit() {
    this.employeeService.employeeObs.subscribe((data:any) => this.employees = data);
  }
}
