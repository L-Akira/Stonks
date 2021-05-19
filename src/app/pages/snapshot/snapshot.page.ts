import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { snapshotItemDTO } from 'src/app/dtos';
import { StocksService } from '../stocks/stocks.service';
import { stockObjectModel } from '../stocks/stocks.model';


@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.page.html',
  styleUrls: ['./snapshot.page.scss'],
})
export class SnapshotPage implements OnInit {
  snapshotItems: stockObjectModel[];

  constructor(private router: Router,private stocksService: StocksService) { }

  ngOnInit() {
    this.snapshotItems = this.stocksService.getData()
    console.log(this.stocksService.getData())
  }

  ionViewWillEnter(){
    this.snapshotItems = this.stocksService.getData()
    console.log(this.stocksService.getData())
  }

  stockDetails(position: number){
    console.log(position)
    this.router.navigate(['/save', this.stocksService.getData()[position]])
  }

}

