import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeeadd',
  imports: [FormsModule],
  templateUrl: './employeeadd.html',
  styleUrl: './employeeadd.css',
  outputs: ['addEmpEvent'],
})
export class Employeeadd {
  addId: number = 5;
  addName: string = '';
  addRole: string = '';
  addSalary: number = 0;
  addStatus: string = 'Active';

  addEmpEvent = new EventEmitter();

  addEmployee() {
    let newEmployee = {
      id: this.addId,
      name: this.addName,
      role: this.addRole,
      salary: this.addSalary,
      status: this.addStatus,
    };
    this.addEmpEvent.emit(newEmployee);

    this.addId = 0;
    this.addName='';
    this.addRole = '';
    this.addSalary = 0;
    this.addStatus = '';
  }
  
}
