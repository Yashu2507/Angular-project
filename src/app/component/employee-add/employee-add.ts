import { Component } from '@angular/core';
import { EmpService } from '../../services/emp-service';

@Component({
  selector: 'app-employee-add',
  imports: [],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css'
})
export class EmployeeAdd {
  constructor(private employeeService: EmpService) {}
  
}
