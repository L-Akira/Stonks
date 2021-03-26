import { Component, OnInit } from '@angular/core';
import { IgridDataDTO } from 'src/app/dtos';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage implements OnInit {

  constructor() { }

  stock: IgridDataDTO = {
    title: 'Day Stats',
    close: 119.23,
    high: 119.23,
    volume: 119.23,
    low: 111.33,
    opening: 333.33,
  }

  ngOnInit() {
  }

}
