import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  num: number = 4;
  cars: string[] = ['Audi', 'BMW', 'Mercedes'];
  flag: boolean = true;
  myStyle1 = {
    color: 'red',
  };
  myStyle2 = {
    color: 'green',
  };

  myFunction() {
    return this.num % 2 === 0 ? this.myStyle1 : this.myStyle2;
  }
}
