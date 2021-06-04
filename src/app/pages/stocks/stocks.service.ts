import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { stockObjectModel } from './stocks.model';
import { NavController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class StocksService {

  snapshotItems: stockObjectModel[];

  constructor(private storage: Storage, private router: Router, private navCtrl: NavController) {
    this.storage.get('dados').then(val =>{
      this.snapshotItems = val as stockObjectModel[]
    })

    if(this.snapshotItems === null)
      this.storage.set('dados', [])

  }

  getData(){
    this.storage.get('dados').then(val =>{
      this.snapshotItems = val as stockObjectModel[]
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

   deleteAllSnapshotsFromStorage(){
     this.snapshotItems = []
     this.storage.set('dados', this.snapshotItems)
     this.navCtrl.navigateBack('/home')
  }

   deleteSnapshotFromStorage(index: number){
     let itemToBeDeleted = this.snapshotItems[index]
     let newSnapshotItems: stockObjectModel[] = this.snapshotItems.filter(snap =>
       snap !== itemToBeDeleted)
     this.snapshotItems = newSnapshotItems
     this.storage.set('dados', this.snapshotItems)
     this.navCtrl.navigateBack('/home')
   }

  
}
