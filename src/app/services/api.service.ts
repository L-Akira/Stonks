import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApiStockResponse } from '../dtos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.polygon.io';
  }

  getStock(date: string, ticker: string):  Observable<IApiStockResponse> {
    return this.http.get<IApiStockResponse>(`${this.baseUrl}/v1/open-close/${ticker}/${date}?unadjusted=true&apiKey=xYDsPKSphDq8Tzl2m5lMQ9moilpNUEdp`)
  }

  getStockMisc(ticker: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/v1/meta/symbols/${ticker}/company?apiKey=xYDsPKSphDq8Tzl2m5lMQ9moilpNUEdp`)
  }

  getCurrencyConv(from: string, to: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/v2/aggs/ticker/C:${from}${to}/prev?unadjusted=true&apiKey=xYDsPKSphDq8Tzl2m5lMQ9moilpNUEdp`);
  }

  getCryptoConv(crypto: string, coin: string) {
    return this.http.get<any>(`${this.baseUrl}/v2/aggs/ticker/X:${crypto}${coin}/prev?unadjusted=true&apiKey=xYDsPKSphDq8Tzl2m5lMQ9moilpNUEdp`)
  }
}
