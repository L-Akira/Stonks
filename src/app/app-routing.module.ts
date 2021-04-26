import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'currencyConversion',
    loadChildren: () => import('./pages/currencyConversion/currencyConversion.module').then( m => m.CurrencyConversionPageModule)
  },  {
    path: 'stocks',
    loadChildren: () => import('./pages/stocks/stocks.module').then( m => m.StocksPageModule)
  },
  {
    path: 'crypto',
    loadChildren: () => import('./pages/crypto/crypto.module').then( m => m.CryptoPageModule)
  },
  {
    path: 'save',
    loadChildren: () => import('./pages/save/save.module').then( m => m.SavePageModule)
  },
  {
    path: 'snapshot',
    loadChildren: () => import('./pages/snapshot/snapshot.module').then( m => m.SnapshotPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
