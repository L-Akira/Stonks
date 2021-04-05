import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.page.html',
  styleUrls: ['./crypto.page.scss'],
})
export class CryptoPage implements OnInit {

  currencyOptions;
  cryptoOptions;

  constructor() { }

  ngOnInit() {
    this.currencyOptions = [
    'BRL',
    'DOL',
    'CAD',
    'AOA',
    'EUR'
  ];

  this.cryptoOptions = [
    'BTC',
    'ETH',
  ];
  }

}
