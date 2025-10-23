import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import information from './information' ;
import { NgxPaginationModule } from 'ngx-pagination';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { ProductlistItem } from "../productlist-item/productlist-item";
@Component({
  selector: 'app-assignment3',
  imports: [
    FontAwesomeModule, NgxPaginationModule, FormsModule,
    ProductlistItem
],
  templateUrl: './assignment3.html',
  styleUrl: './assignment3.css'
})
export class Assignment3 {
  information = information;
  p:number=1;
  filteredInfos = [...information];
  infos = [...information];
  sortAsc(){
    this.filteredInfos= this.filteredInfos.sort((a,b)=>a.price-b.price);
  }
  sortDsc(){
    this.filteredInfos= this.filteredInfos.sort((a,b)=>b.price-a.price);
  }

  searchText = '';
  
  onSearchTextEntered() {
    this.filteredInfos = this.infos.filter(info =>
      info.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
   faStar = faStar;
}
