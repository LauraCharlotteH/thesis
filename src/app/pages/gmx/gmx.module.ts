import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GmxPageRoutingModule } from './gmx-routing.module';

import { GmxPage } from './gmx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GmxPageRoutingModule
  ],
  declarations: [GmxPage]
})
export class GmxPageModule {}
