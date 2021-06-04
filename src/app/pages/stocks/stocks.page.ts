import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IgridDataDTO } from 'src/app/dtos';
import { stockObjectModel } from './stocks.model';
import { StocksService } from './stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage implements OnInit {

  constructor(private stocksService: StocksService, public toastController: ToastController, private storage: Storage) { }

  stockSubmit: stockObjectModel;

  datePicker: string;

  firstFetch: boolean;

  selectedDate: string;

  imageLink: string;

  title: string;

  selectedTicker: string;

  stockOptions:string[];

  corpName: string;

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

    this.stockSubmit = {
      datePicker: this.datePicker,
      firstFetch: this.firstFetch,
      selectedDate: this.selectedDate,
      imageLink: this.imageLink,
      title: this.title,
      selectedTicker: this.selectedTicker,
      stockOptions: this.stockOptions,
      close: this.dayStats.close,
      high: this.dayStats.high,
      volume: this.dayStats.volume,
      low: this.dayStats.low,
      opening: this.dayStats.opening,
      vwa: this.dayStats.vwa,
      corpName: ''
    };

  }

  submitSnapshot(){
    this.stocksService.StorageSetData(this.stockSubmit)
  }

  async showToast(){
    const toast = await this.toastController.create({
      message: 'Stock Stats Saved',
      duration: 2000,
      color: 'primary',
      keyboardClose: true,
      cssClass: "toast.scss",
    });
    toast.present();
  }
}
