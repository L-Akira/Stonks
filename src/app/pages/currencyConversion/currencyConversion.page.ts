import { CustomInputComponent } from '../../templates/custom-input/custom-input.component';

import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  ngOnInit() {
  }

  sendCustomInput(data: string, formAttribute: string){
    this.formObject[formAttribute] = data
    
  }

  submitForm(){
    console.log(this.formObject)

  }
  
  getAmount(){
    return Number(this.formObject.amount).toFixed(Number(this.formObject.precision))
  }

  
}
