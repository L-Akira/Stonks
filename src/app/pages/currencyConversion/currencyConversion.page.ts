
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-currencyConversion',
  templateUrl: './currencyConversion.page.html',
  styleUrls: ['./currencyConversion.page.scss'],
})
export class CurrencyConversionPage implements OnInit {
  private formObject = {
    'from': null,
    'to': null,
    'precision': null,
    'amount': null,
  }
  limitPrecision: [min: string, max: string ];
  limitAmount: [min: string, max: string ];
  currencyOptions: string[];
  result: string;
  searchError: boolean;
  errorMessage: string;

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.limitPrecision = ["0", "5"];
    this.limitAmount = ["0", "10000000000"];
    this.currencyOptions = [
      'BRL',
      'USD',
      'CAD',
      'CHF',
      'EUR'
    ];
    this.result =  Number(this.formObject.amount).toFixed(Number(this.formObject.precision));
    this.searchError = false;
  }

  handleCustomInput(data: string | number, formAttribute: string){
    this.formObject[formAttribute] = data;
  }

  submitForm(){
    const {from, to, precision, amount} = this.formObject;

    if(!(from && to && precision && amount))
      return;

    this.service.getCurrencyConv(this.formObject.from, this.formObject.to).subscribe((data) => {
      const conversion = data.results[0].c;
      this.result = (Number(this.formObject.amount) * conversion).toFixed(Number(this.formObject.precision));
      this.searchError = false;
    }, err => {
      this.searchError = true;
      this.errorMessage = err.status === 404 ?
      'Stock não disponível nesta data'
      :
      'A api não esta em funcionamento';
    })
  }
}
