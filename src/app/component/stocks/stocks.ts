import { Component } from '@angular/core';
import { Stockservice } from '../../services/stockService/stockservice';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { StocksModel } from '../../model/stocks_model';

@Component({
  selector: 'app-stocks',
  imports: [FormsModule,NgxPaginationModule],
  templateUrl: './stocks.html',
  styleUrl: './stocks.css'
})
export class Stocks {

  stocks: StocksModel[] = [];
  comments: any[] = [];
  p:number=1;
  

  constructor(private stockservice:Stockservice){

  }

  ngOnInit(){
   this.fetchStocks();
  }

  fetchStocks(){
     this.stockservice.getStocks().subscribe(
      (response:StocksModel[])=>{
        console.log(response);
        this.stocks = response;
      },
      (error)=>{
        console.log(error);
      }
    )
  }


 


}
