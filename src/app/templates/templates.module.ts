import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { NgModule } from '@angular/core';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomInputComponent } from './custom-input/custom-input.component';


@NgModule({
  declarations: [CustomButtonComponent, CustomSelectComponent, CustomInputComponent],
  exports: [CustomButtonComponent, CustomSelectComponent, CustomInputComponent],
  imports: [IonicModule, FormsModule]
})

export class TemplatesModule {

}
