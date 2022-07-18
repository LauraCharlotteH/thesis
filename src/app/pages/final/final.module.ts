import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalPageRoutingModule } from './final-routing.module';

import { FinalPage } from './final.page';
import {HeaderInfoComponent} from '../../components/header-info/header-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalPageRoutingModule
  ],
  declarations: [FinalPage, HeaderInfoComponent]
})
export class FinalPageModule {}
