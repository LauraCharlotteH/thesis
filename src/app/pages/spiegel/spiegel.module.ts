import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpiegelPageRoutingModule } from './spiegel-routing.module';

import { SpiegelPage } from './spiegel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpiegelPageRoutingModule
  ],
  declarations: [SpiegelPage]
})
export class SpiegelPageModule {}
