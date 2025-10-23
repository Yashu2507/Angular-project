import { Component, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-employeetable',
  imports: [FontAwesomeModule],
  templateUrl: './employeetable.html',
  styleUrl: './employeetable.css',
  inputs: ['allemployees'],
  outputs:['deleteevent']
})
export class Employeetable {
allemployees:any
deleteevent = new EventEmitter();
faTrash= faTrash;
deleteEmp(emp:any){
  this.deleteevent.emit(emp);
}
}
