import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IgridDataDTO } from 'src/app/dtos';

@Component({
  selector: 'app-stocks',
  templateUrl: './save.page.html',
  styleUrls: ['./save.page.scss'],
})

@Injectable()
export class SavePage implements OnInit {

  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe(params => {})
   }

  dayStats: IgridDataDTO = {
    title: `Day Stats`,
    close: 119.23,
    high: 119.23,
    volume: 25131789,
    low: 111.33,
    opening: 333.33,
  }


  ngOnInit() {

  }


}
