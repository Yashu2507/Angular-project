import { Component } from '@angular/core';
import { Employeeservices } from '../../services/employeeService/employeeservices';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {
  employees:any;
  selectedFilter:any='Select one';
  constructor(private Employeeservices:Employeeservices){
    this.loademployee();
  }

  filterChange(){
    this.loademployee();
  }

  loademployee(){
    if(this.selectedFilter==='male'){
      this.employees = this.Employeeservices.getMaleEmployees();
    }else if(this.selectedFilter==='female'){
      this.employees = this.Employeeservices.getFemaleEmployees();
    }else {
      this.employees = this.Employeeservices.getAllEmployees();
    }
  }
}
