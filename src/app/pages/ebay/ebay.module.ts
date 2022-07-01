import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbayPageRoutingModule } from './ebay-routing.module';

import { EbayPage } from './ebay.page';
import {AdjustComponent} from './adjust/adjust.component';
import {PopUpComponent} from './pop-up/pop-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbayPageRoutingModule
  ],
  declarations: [EbayPage, AdjustComponent, PopUpComponent]
})
export class EbayPageModule {}
