import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StocksModel } from '../../model/stocks_model';

@Injectable({
  providedIn: 'root'
})
export class Stockservice {
   stocks_url = "http://endeavourtech.ddns.net:8095/stockanalytics/stocks/getAllStockFundamentalsJPA";

   constructor(private httpClient:HttpClient){

   }


   getStocks(): Observable<StocksModel[]> {
    return this.httpClient.get<StocksModel[]>(this.stocks_url);
   }

   

}
