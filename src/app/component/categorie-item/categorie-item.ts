import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie-item',
  imports: [],
  templateUrl: './categorie-item.html',
  styleUrl: './categorie-item.css',
  inputs: ['categoryitem']
})
export class CategorieItem {
  categoryitem: any;
}
