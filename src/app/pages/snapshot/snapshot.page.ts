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
  snapshotItems: stockObjectModel[] ;

  constructor(private router: Router,private stocksService: StocksService) { }

  ngOnInit() {
    this.snapshotItems = this.stocksService.snapshotItems
   // console.log(this.snapshotItems[0].dayStats)
  }

  stockDetails(position: number){
    console.log(position)
    this.router.navigate(['/save', this.snapshotItems[position]])
  }
  
}

/*
    this.snapshotItems = [
      {
        snapshotName:"Ação GameStop 10/04",
        savedDate:"10/04/2021",
        stockName:"GME",
        stockCorpName: "GameStop Corporation",
        stockPrice: 100.33,
        stockDate: "11/04/2021",
      },
      {
        snapshotName:"Ação Apple 10/04",
        savedDate:"10/04/2021",
        stockName:"AAPL",
        stockCorpName: "Apple Inc.",
        stockPrice: 100.33,
        stockDate: "11/04/2021",
      },
    ]
    */
