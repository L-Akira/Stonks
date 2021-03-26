import { Component, Input, OnInit } from '@angular/core';
import { IgridDataDTO } from 'src/app/dtos';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements OnInit {

  @Input() data: IgridDataDTO;

  

  constructor() { }

  ngOnInit() {}

}
