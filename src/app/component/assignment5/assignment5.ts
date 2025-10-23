import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgePipe, OrdinalPipe, salutationPipe, searchEmployee } from '../../custom-pipes/ordinal-pipe';
import { RomanPipe } from '../../custom-pipes/ordinal-pipe';

@Component({
  selector: 'app-assignment5',
  imports: [FormsModule, CommonModule, OrdinalPipe, RomanPipe, AgePipe, salutationPipe,searchEmployee],
  templateUrl: './assignment5.html',
  styleUrl: './assignment5.css'
})
export class Assignment5 {
  num: number = 0;
  birthDate: Date = new Date();

   employees = [
  { id: 1, name: "Aarav", age: 27, gender: "Male", department: "IT", salary: 55000 },
  { id: 2, name: "Isha", age: 31, gender: "Female", department: "HR", salary: 48000 },
  { id: 3, name: "Rohan", age: 29, gender: "Male", department: "Finance", salary: 60000 },
  { id: 4, name: "Sneha", age: 26, gender: "Female", department: "Marketing", salary: 52000 },
  { id: 5, name: "Karan", age: 35, gender: "Male", department: "Engineering", salary: 75000 },
  { id: 6, name: "Priya", age: 30, gender: "Female", department: "Sales", salary: 58000 },
  { id: 7, name: "Arjun", age: 33, gender: "Male", department: "Operations", salary: 62000 },
  { id: 8, name: "Neha", age: 28, gender: "Female", department: "Design", salary: 50000 },
  { id: 9, name: "Vikram", age: 40, gender: "Male", department: "Management", salary: 90000 },
  { id: 10, name: "Ananya", age: 25, gender: "Female", department: "Support", salary: 45000 }
];

search: String ='';

}
