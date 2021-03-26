import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoPageRoutingModule } from './crypto-routing.module';

import { CryptoPage } from './crypto.page';
import { TemplatesModule } from 'src/app/templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoPageRoutingModule,
    TemplatesModule,
  ],
  declarations: [CryptoPage]
})
export class CryptoPageModule {}
