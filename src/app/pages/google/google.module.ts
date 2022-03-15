import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GooglePageRoutingModule } from './google-routing.module';

import { GooglePage } from './google.page';
import {PopUpComponent} from './modal/pop-up/pop-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglePageRoutingModule
  ],
  declarations: [
    GooglePage,
    PopUpComponent
  ]
})
export class GooglePageModule {}
