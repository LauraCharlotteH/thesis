import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmazonPageRoutingModule } from './amazon-routing.module';

import { AmazonPage } from './amazon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmazonPageRoutingModule
  ],
  declarations: [AmazonPage]
})
export class AmazonPageModule {}
