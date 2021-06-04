import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IgridDataDTO } from 'src/app/dtos';
import { stockObjectModel } from './stocks.model';
import { StocksService } from './stocks.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage implements OnInit {

  constructor(
    private stocksService: StocksService,
    public toastController: ToastController,
    private storage: Storage,
    private service: ApiService,
    ) { }

  stockSubmit: stockObjectModel;

  datePicker: string;

  firstFetch: boolean;

  selectedDate: string;

  imageLink: string;

  title: string;

  selectedTicker: string;

  stockOptions:string[];

  corpName: string;

  searchError: boolean;

  fetching: boolean;

  errorMessage: string;

  yesterday: string;


  dayStats: IgridDataDTO = {
    title: `Day Stats`,
    close: 119.23,
    high: 119.23,
    volume: 25131789,
    low: 111.33,
    opening: 333.33,
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
      'ATVI',
      'INTC',
      'AMD',
      'TTWO',
      'HEAR'
    ];

    this.firstFetch = true;
    this.searchError = false;
    this.yesterday = new Date((new Date()).valueOf() - 1000*60*60*24).toJSON().slice(0,10);
    this.fetching = false;
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

    this.fetching = true;

    this.service.getStock(this.selectedDate, this.selectedTicker).subscribe((data) => {
      this.searchError = false;
      this.dayStats.close = data.close;
      this.dayStats.high = data.high;
      this.dayStats.low = data.low;
      this.dayStats.opening = data.open;
      this.dayStats.volume = data.volume;
      this.imageLink = `https://s3.polygon.io/logos/${this.selectedTicker.toLowerCase()}/logo.png`;
      this.title = this.selectedTicker;
      this.dayStats.title = titleDate;
    }, err => {
      this.searchError = true;
      this.errorMessage = err.status === 404 ?
      'Stock não disponível nesta data'
      :
      'A api não esta em funcionamento';
      this.firstFetch = false;
    });

    this.service.getStockMisc(this.selectedTicker).subscribe((data) => {
      this.corpName = data.name;
      this.firstFetch = false;
      this.searchError = false;
    }, err => {
      this.errorMessage = 'A api não esta em funcionamento';
      this.searchError = true;
    })

    this.fetching = false;
  }

  submitSnapshot(){
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
      corpName: this.corpName,
    };
    console.log(this.stockSubmit)
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
