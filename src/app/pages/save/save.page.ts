import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IgridDataDTO, snapshotItemDTO } from 'src/app/dtos';
import { stockObjectModel } from '../stocks/stocks.model';
import { StocksService } from '../stocks/stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './save.page.html',
  styleUrls: ['./save.page.scss'],
})

@Injectable()
export class SavePage implements OnInit {
  snapshotItemCopy: stockObjectModel;
  gridData: IgridDataDTO;
  imageLink: string = "";

  constructor(public route: ActivatedRoute, private stocksService: StocksService) {

   }


  ngOnInit() {
    this.route.params.subscribe(params => {console.log(params); this.snapshotItemCopy = params as stockObjectModel })
    
    this.gridData = {...this.snapshotItemCopy}
     
    
    this.imageLink = `https://s3.polygon.io/logos/${this.snapshotItemCopy.title.toLowerCase()}/logo.png`
  }


}
