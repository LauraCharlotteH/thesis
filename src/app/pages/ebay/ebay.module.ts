import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbayPageRoutingModule } from './ebay-routing.module';

import { EbayPage } from './ebay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbayPageRoutingModule
  ],
  declarations: [EbayPage]
})
export class EbayPageModule {}
