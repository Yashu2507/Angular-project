import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam',
  imports: [FormsModule],
  templateUrl: './exam.html',
  styleUrl: './exam.css'
})
export class Exam {

  selectedState:String = '';

}
