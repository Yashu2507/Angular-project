import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  username: string = 'Yash';
  image_url = 'https://angular.io/assets/images/logos/angular/angular.svg';

  flag:boolean = true;
  toggleflag(){
    this.flag = !this.flag
  }

  rowSpanValue: number  = 2;
}
