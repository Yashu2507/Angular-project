import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employeeservices {
  employees = [
  { id: 1, name: 'Arjun Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'Male' },
  { id: 2, name: 'Priya Verma', role: 'Developer', salary: 48000, status: 'Active', gender: 'Female' },
  { id: 3, name: 'Ravi Kumar', role: 'Tester', salary: 32000, status: 'Inactive', gender: 'Male' },
  { id: 4, name: 'Neha Patel', role: 'HR', salary: 41000, status: 'Active', gender: 'Female' },
  { id: 5, name: 'Vikram Singh', role: 'Developer', salary: 52000, status: 'Active', gender: 'Male' },
  { id: 6, name: 'Ananya Iyer', role: 'Designer', salary: 39000, status: 'Active', gender: 'Female' },
  { id: 7, name: 'Suresh Reddy', role: 'Team Lead', salary: 70000, status: 'Active', gender: 'Male' },
  { id: 8, name: 'Kavya Nair', role: 'Tester', salary: 35000, status: 'Inactive', gender: 'Female' }
];


  getAllEmployees(){
    return this.employees;
  }

  getMaleEmployees(){
    return this.employees.filter((emp)=>emp.gender==='Male');
  }
  getFemaleEmployees(){
    return this.employees.filter((emp)=>emp.gender==='Female');
  }

  
}
