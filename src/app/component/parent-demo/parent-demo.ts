import { Component, input } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';

@Component({
  selector: 'app-parent-demo',
  imports: [Child1Demo,Child2Demo],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css'
})
export class ParentDemo {
  parentName:string ='';
receiveData(dataFromChild: any) {
  this.parentName = dataFromChild;
}
 a:number =100;
 
}
