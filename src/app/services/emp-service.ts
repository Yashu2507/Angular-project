import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  private employees = [
    { eId: 1, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 2, name: "geeta", sal: 8000, gender: "female" },
    { eId: 3, name: "sameer", sal: 7000, gender: "male" },
    { eId: 4, name: "sita", sal: 9000, gender: "female" }
  ];
 private employeeSubject = new BehaviorSubject<any>(this.employees);
 readonly employeeObs = this.employeeSubject.asObservable();//Compoment will subscribe to this observable to get the data.
 private nextId = 5;
 addEmp(empToAdd:any){
   empToAdd.id = ++this.nextId;
    this.employees.push(empToAdd);
    this.employeeSubject.next(Object.assign([...this.employees]));
 }
 deleteEmp(id:number){
  this.employees = this.employees.filter(emp =>emp.eId!==id);
  this.employeeSubject.next([...this.employees])
 }
}
