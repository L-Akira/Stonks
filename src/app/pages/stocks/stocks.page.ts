import { Component, OnInit } from '@angular/core';
import { IgridDataDTO } from 'src/app/dtos';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage implements OnInit {

  constructor() { }

  datePicker: string;

  firstFetch: boolean;

  selectedDate: string;

  imageLink: string;

  title: string;

  selectedTicker: string;

  stockOptions:string[];

  dayStats: IgridDataDTO = {
    title: `Day Stats`,
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
    this.stockOptions = [
      'GME',
      'AAPL',
      'F',
      'NVDA',
      'NFLX',
      'TSLA',
      'EA',
      'ATVI'
    ];

    this.firstFetch = true;
  }

  registerDate() {
    this.selectedDate = this.datePicker.substring(0, 10);
  }

  fetchStock() {
    if (!this.selectedDate || !this.selectedTicker)
      return;

    const titleDate = `${
      this.selectedDate
      .split('-')
      .reverse()
      .join('/')
    } | ${this.selectedTicker}`;

    this.firstFetch = false;
    this.imageLink = `https://s3.polygon.io/logos/${this.selectedTicker.toLowerCase()}/logo.png`;
    this.title = this.selectedTicker;
    this.dayStats.title = titleDate;
  }

}
