import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IgridDataDTO, snapshotItemDTO } from 'src/app/dtos';

@Component({
  selector: 'app-stocks',
  templateUrl: './save.page.html',
  styleUrls: ['./save.page.scss'],
})

@Injectable()
export class SavePage implements OnInit {
  snapshotItem: snapshotItemDTO;
  dayStats: IgridDataDTO;
  constructor(public route: ActivatedRoute) {

  
   }

  


  ngOnInit() {
    this.route.params.subscribe(params => { this.snapshotItem = params as snapshotItemDTO })
    console.log(this.snapshotItem)
    this.dayStats = {
      title: this.snapshotItem.stockName,
      close: 119.23,
      high: 119.23,
      volume: 25131789,
      low: 111.33,
      opening: 333.33,
    }
  }


}
