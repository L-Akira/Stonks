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
      this.snapshotItems = val as stockObjectModel[]
    })

    if(this.snapshotItems === null)
      this.storage.set('dados', [])

  }

  getData(){
    this.storage.get('dados').then(val =>{
      this.snapshotItems = val as stockObjectModel[]
      console.log(val);
    })

    if(this.snapshotItems === null){
      this.storage.set('dados', [])

      this.storage.get('dados').then(val => {
        this.snapshotItems = val as stockObjectModel[];
      })
    }
    return this.snapshotItems
   }

   StorageSetData(item: stockObjectModel){
    this.storage.get('dados').then(val =>{
      this.snapshotItems = val as stockObjectModel[]
      console.log(val);
    })

    if(this.snapshotItems === null){
      this.storage.set('dados', [])

      this.storage.get('dados').then(val => {
        this.snapshotItems = val as stockObjectModel[];
      })
    }
     this.snapshotItems.push(item)
     this.storage.set('dados', this.snapshotItems)
   }
}
