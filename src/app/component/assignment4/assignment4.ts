import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { MyModal } from '../my-modal/my-modal';
import Snackbar from 'awesome-snackbar';
import { EMPLOYEE_ADDED } from '../../constants/message_constant';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assignment4',
  imports: [FormsModule, FontAwesomeModule, MyModal],
  templateUrl: './assignment4.html',
  styleUrls: ['./assignment4.css'],
})
export class Assignment4 {
  faTrash = faTrash;
  employees = [
    { id: 1, name: 'John', role: 'Manager', salary: 85000, status: 'Active' },
    { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active' },
    { id: 3, name: 'Bob', role: 'Tester', salary: 30000, status: 'Inactive' },
    { id: 4, name: 'Eve', role: 'HR', salary: 40000, status: 'Active' },
  ];
  filteredEmployee: any
  adding: boolean = true;

  deleteEmp(emp: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.employees.indexOf(emp);
        if (index !== -1) {
          this.employees.splice(index, 1);
        }
        Swal.fire({
          title: 'Deleted!',
          text: 'Employee has been deleted.',
          icon: 'success',
        });
      }
    });
  }
  addId: number = 5;
  addName: string = '';
  addRole: string = '';
  addSalary: number = 0;
  addStatus: string = 'Active';

  addEmployee() {
    new Snackbar( EMPLOYEE_ADDED ,
      {position: 'top-center', theme:'light', timeout:5000, actionText:'X'}
    );
    const newEmployee = {
      id: this.addId,
      name: this.addName,
      role: this.addRole,
      salary: this.addSalary,
      status: this.addStatus,
    };

    this.employees.push(newEmployee);
 

    // reset form fields
    this.addId++;
    this.addName = '';
    this.addRole = '';
    this.addSalary = 0;
    this.addStatus = 'Active';
  }
  faEye = faEye;

  viewEmp(emp:any, index:any){
    this.adding = false;
    this.filteredEmployee = this.employees.find(e=>e.id===emp.id);
  }
}

