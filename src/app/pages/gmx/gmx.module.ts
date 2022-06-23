import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GmxPageRoutingModule } from './gmx-routing.module';

import { GmxPage } from './gmx.page';
import {PopUpComponent} from './pop-up/pop-up.component';
import {AdjustComponent} from './adjust/adjust.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GmxPageRoutingModule
  ],
  declarations: [GmxPage, PopUpComponent, AdjustComponent]
})
export class GmxPageModule {}
