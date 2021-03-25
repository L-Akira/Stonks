import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyConversionPage } from './currencyConversion.page';

const routes: Routes = [
  {
    path: '',
    component: CurrencyConversionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyConversionPageRoutingModule {}
