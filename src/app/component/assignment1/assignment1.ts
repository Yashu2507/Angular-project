import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-assignment1',
  imports: [FormsModule],
  templateUrl: './assignment1.html',
  styleUrl: './assignment1.css'
})
export class Assignment1 {

//  flag1: boolean=true;
// togglepara(){
//   this.flag = !this.flag
// }

  maxLength: number= 100;
  textArea: String = "";
  flag: boolean = true;
  togglepara(){
    this.flag = !this.flag; 
  };
  selectedState: string="";
  num1: number=0;
  num2: number=0;
  operator: string="+";
  result: number=0;
  calculate(){
    console.log(this.operator);
    if(this.operator == "addition"){
      this.result = this.num1 + this.num2;
    }
    else if(this.operator == "subtraction"){
      this.result = this.num1 - this.num2;
    }
    else if(this.operator == "multiplication"){
      this.result = this.num1 * this.num2;
    }
    else if(this.operator == "division"){
      this.result = this.num1 / this.num2;
    }
  }

  num: number=0;
  increament(){
    this.num++;
  }

  decreament(){
    this.num--;
  }
  reset(){
    this.num=0;
  }

  isDark: boolean = false;   // starts in Light mode

toggleTheme() {
  this.isDark = !this.isDark;
}
Celcius: number= 0;
fahrenheit: number=0;
convert(){
  this.fahrenheit = (this.Celcius * 1.8) + 32;
}

rowSpanvalue: number = 2;

submitEmail(email: string) {
    // You can do anything with this value — validation, API call, etc.
    console.log('Email entered:', email);

    if (email) {
      alert(`You entered: ${email}`);
    } else {
      alert('Please enter an email address');
    }
  }


  
}
