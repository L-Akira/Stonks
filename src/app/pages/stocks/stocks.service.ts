import { Injectable } from '@angular/core';

import { stockObjectModel } from './stocks.model';


@Injectable({
  providedIn: 'root'
})
export class StocksService {

  snapshotItems: stockObjectModel[] = [];

  constructor() { }

}
