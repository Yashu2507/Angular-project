





import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { Employeetable } from "../employeetable/employeetable";
import { Employeeadd } from "../employeeadd/employeeadd";


@Component({
  selector: 'app-employeecrud',
  imports: [FormsModule, FontAwesomeModule, Employeetable, Employeeadd],
  templateUrl: './employeecrud.html',
  styleUrl: './employeecrud.css'
})
export class Employeecrud {

  deletedEmp(deleteddata:any){
    
    this.employees = this.employees.filter((emp)=>emp.id!=deleteddata.id)
    
    
  }

  faTrash = faTrash;
    employees = [
      { id: 1, name: 'TinuAnand', role: 'Manager', salary: 85000, status: 'Active' },
      { id: 2, name: 'RaveenaTondon', role: 'Developer', salary: 45000, status: 'Active' },
      { id: 3, name: 'Yash', role: 'Tester', salary: 30000, status: 'Inactive' },
      { id: 4, name: 'AnantNag', role: 'HR', salary: 40000, status: 'Active' },
    ];

    addEmployee(newEmployee:any){
      this.employees.push(newEmployee);

    }
}
