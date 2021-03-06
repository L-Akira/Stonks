import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { NgModule } from '@angular/core';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid/data-grid.component';
import { HeaderComponent } from './header/header.component';
import { SnapshotItemComponent } from './snapshot-item/snapshot-item.component'
import { ErrorBoxComponent } from './error-box/error-box.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomSelectComponent,
    CustomInputComponent,
    DataGridComponent,
    HeaderComponent,
    SnapshotItemComponent,
    ErrorBoxComponent,
  ],
  exports: [
    CustomButtonComponent,
    CustomSelectComponent,
    CustomInputComponent,
    DataGridComponent,
    HeaderComponent,
    SnapshotItemComponent,
    ErrorBoxComponent,
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ]
})

export class TemplatesModule {

}
