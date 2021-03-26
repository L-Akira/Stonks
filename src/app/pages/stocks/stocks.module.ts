import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StocksPageRoutingModule } from './stocks-routing.module';

import { StocksPage } from './stocks.page';
import { TemplatesModule } from 'src/app/templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StocksPageRoutingModule,
    TemplatesModule,
  ],
  declarations: [StocksPage]
})
export class StocksPageModule {}
