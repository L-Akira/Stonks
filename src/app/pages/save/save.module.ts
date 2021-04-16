import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavePageRoutingModule } from './save-routing.module';

import { SavePage } from './save.page';
import { TemplatesModule } from 'src/app/templates/templates.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavePageRoutingModule,
    TemplatesModule,
  ],
  declarations: [SavePage]
})
export class SavePageModule {}
