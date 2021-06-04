import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks/stocks.service';
import { stockObjectModel } from '../stocks/stocks.model';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.page.html',
  styleUrls: ['./snapshot.page.scss'],
})
export class SnapshotPage implements OnInit {
  snapshotItems: stockObjectModel[];

  constructor(private router: Router, private stocksService: StocksService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.snapshotItems = this.stocksService.getData()
  }

  ionViewWillEnter(){
    this.snapshotItems = this.stocksService.getData()
  }
 
  stockDetails(position: number){
    this.router.navigate(['/save', this.stocksService.getData()[position]])
  }

  isSnapshotItemsEmpty(){
    return this.snapshotItems.length === 0
}

  callDeleteSnapshotFromStorage(index: number){
    this.stocksService.deleteSnapshotFromStorage(index)
  }

  callDeleteAllSnapshotsFromStorage(){
    this.stocksService.deleteAllSnapshotsFromStorage()
  }

  async showSingleDeleteToast(){
    const toast = await this.toastCtrl.create({
      message: 'Snapshot Deleted Susccessfully',
      duration: 2000,
      color: 'primary',
      keyboardClose: true,
      cssClass: "toast.scss",
    });
    toast.present();
  }

  async showDeleteAllToast(){
    const toast = await this.toastCtrl.create({
      message: 
        this.isSnapshotItemsEmpty() 
         ?'Snapshots List Already Empty!'
         :'All Snapshots Deleted Susccessfully',
      duration: 2000,
      color: 'primary',
      keyboardClose: true,
      cssClass: "toast.scss",
    });
    toast.present();
  }

}

