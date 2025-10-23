import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {
  constructor(private router: Router, private location:Location) {
    
  }

  doSomethingAndGoHome() {
    this.router.navigate(['home']);
  }

  // goToNextPage() {
  //   this.location.forward();
  // }




  // this.location.back();
}
