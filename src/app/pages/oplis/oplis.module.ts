import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OPLISPageRoutingModule } from './oplis-routing.module';

import { OPLISPage } from './oplis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OPLISPageRoutingModule
  ],
  declarations: [OPLISPage]
})
export class OPLISPageModule {}
