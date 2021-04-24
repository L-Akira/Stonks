import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snapshot-item',
  templateUrl: './snapshot-item.component.html',
  styleUrls: ['./snapshot-item.component.scss'],
})
export class SnapshotItemComponent implements OnInit {

  @Input() snapshotName: string
  @Input() savedDate: string
  @Input() stockName: string
  @Input() stockCorpName: string
  @Input() stockPrice: number
  @Input() stockDate: string
  
  constructor() { }

  ngOnInit() {}

}
