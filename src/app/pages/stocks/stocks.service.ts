import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { stockObjectModel } from './stocks.model';


@Injectable({
  providedIn: 'root'
})
export class StocksService {

  snapshotItems: stockObjectModel[];

  constructor(private storage: Storage) {
    this.storage.get('dados').then(val =>{
      this.snapshotItems = val as stockObjectModel []
    })
   }

   getData(){
     return this.snapshotItems
   }

   StorageSetData(item: stockObjectModel){
     this.snapshotItems.push(item)
     this.storage.set('dados', this.snapshotItems)
   }
}
