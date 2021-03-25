import { TemplatesModule } from '../../templates/templates.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencyConversionPageRoutingModule } from './currencyConversion-routing.module';

import { CurrencyConversionPage } from './currencyConversion.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplatesModule,
    CurrencyConversionPageRoutingModule,
    
  ],
  declarations: [CurrencyConversionPage]
})
export class CurrencyConversionPageModule {}
