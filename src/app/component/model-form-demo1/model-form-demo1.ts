import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form-demo1',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './model-form-demo1.html',
  styleUrl: './model-form-demo1.css'
})
export class ModelFormDemo1 {
 registerForm!: FormGroup;

  constructor() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('Yash',[Validators.required, Validators.minLength(5)]),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
      })
    })
  }
}
