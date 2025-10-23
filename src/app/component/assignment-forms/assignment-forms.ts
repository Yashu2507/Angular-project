import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-forms',
  imports: [FormsModule,CommonModule],
  templateUrl: './assignment-forms.html',
  styleUrl: './assignment-forms.css'
})
export class AssignmentForms {

   register ={
    firstName: 'Yash',
    lastName: 'Nalmasa',
    email: 'yash@mail.com',
    password:'Yash@123',
    gender:'',
    description:'',
    source:'',
    terms:false,
    updates:false

  }
  
  
  submitMyForm(formObj:NgForm){
    
  }
}
