import { Component } from '@angular/core';
import products from './productdata';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { ProductlistItem } from '../productlist-item/productlist-item';

@Component({
  selector: 'app-productlist',
  imports: [
    NgxPaginationModule,
    FontAwesomeModule, ProductlistItem
  ],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css'
})
export class Productlist {
  productArr = products;
  
  p:number=1;

  faStar = faStar;
}

