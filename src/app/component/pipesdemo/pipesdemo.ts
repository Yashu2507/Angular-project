import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';

@Component({
  selector: 'app-pipesdemo',
  imports: [CommonModule,FormsModule,OrdinalPipe,],
  templateUrl: './pipesdemo.html',
  styleUrl: './pipesdemo.css'
})
export class Pipesdemo {
  myName="Yashwanth Nalamasa";
  salary=20000;
  today = new Date();
  user = {name:"yashwanth", age: 20, address:"Hyderabad"};

  arr = [10,20,30,40,50];
  num:number = 21;
}
