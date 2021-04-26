import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { snapshotItemDTO } from 'src/app/dtos';


@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.page.html',
  styleUrls: ['./snapshot.page.scss'],
})
export class SnapshotPage implements OnInit {
  snapshotItems: snapshotItemDTO[];

  constructor(private router: Router) { }

  ngOnInit() {
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
  }

  stockDetails(position: number){
    this.router.navigate(['/save', this.snapshotItems[position]])
  }
}
