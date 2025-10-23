import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
@Component({
  selector: 'app-productlist-item',
  imports: [NgxPaginationModule,FontAwesomeModule],
  templateUrl: './productlist-item.html',
  styleUrl: './productlist-item.css',
  inputs:['product']
})
export class ProductlistItem {
product:any
faStar = faStar;
}
