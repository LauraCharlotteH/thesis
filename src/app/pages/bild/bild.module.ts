import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BildPageRoutingModule } from './bild-routing.module';

import { BildPage } from './bild.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BildPageRoutingModule
  ],
  declarations: [BildPage]
})
export class BildPageModule {}
