import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmazonPageRoutingModule } from './amazon-routing.module';

import { AmazonPage } from './amazon.page';
import {PopUpComponent} from './pop-up/pop-up.component';
import {AdjustComponent} from './adjust/adjust.component';
import {TitledDropDownComponent} from '../../../components/titled-drop-down/titled-drop-down.component';
import {ThirdPartyAdjustComponent} from './third-party-adjust/third-party-adjust.component';
import {PurposeAdjustComponent} from './purpose-adjust/purpose-adjust.component';
import {HeaderInfoComponent} from "../../../components/header-info/header-info.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmazonPageRoutingModule
  ],
  declarations: [AmazonPage, PopUpComponent, AdjustComponent, ThirdPartyAdjustComponent, PurposeAdjustComponent, TitledDropDownComponent, HeaderInfoComponent]
})
export class AmazonPageModule {}
