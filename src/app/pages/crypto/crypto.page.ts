import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.page.html',
  styleUrls: ['./crypto.page.scss'],
})
export class CryptoPage implements OnInit {

  public currencyOptions;
  public cryptoOptions;
  public formObject;
  public result;
  searchError: boolean;
  errorMessage: string;


  constructor(private service: ApiService,) { }

  ngOnInit() {
    this.searchError = false;
    this.currencyOptions = [
      'USD',
    ];

    this.cryptoOptions = [
      'BTC',
      'ETH',
      'XMR',
      'DOGE',
    ];

    this.formObject = {
      'crypto': null,
      'coin': null,
    }

    this.result = 0;
  }

  handleCustomInput(data: string | number, formAttribute: string){
    this.formObject[formAttribute] = data;
  }

  fetchCrypto() {
    this.service.getCryptoConv(this.formObject['crypto'], this.formObject['coin']).subscribe((data) => {
      this.result = data.results[0].c;
      this.searchError = false;
    }, err => {
      this.searchError = true;
      this.errorMessage = 'A api não esta em funcionamento';
    });

  }

}
