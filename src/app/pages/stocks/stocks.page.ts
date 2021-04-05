import { Component, OnInit } from '@angular/core';
import { IgridDataDTO } from 'src/app/dtos';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage implements OnInit {

  constructor() { }

  dayStats: IgridDataDTO = {
    title: 'Day Stats',
    close: 119.23,
    high: 119.23,
    volume: 25131789,
    low: 111.33,
    opening: 333.33,
  }

  previousDay: IgridDataDTO = {
    title: 'Previous Day',
    close: 209.23,
    high: 275.56,
    volume: 24654896,
    low: 90.89,
    opening: 220.93,
    vwa: 69.69
  }

  ngOnInit() {
  }

}
