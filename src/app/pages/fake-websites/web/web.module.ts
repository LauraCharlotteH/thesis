import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPageRoutingModule } from './web-routing.module';

import { WebPage } from './web.page';
import {PopUpComponent} from './pop-up/pop-up.component';
import {AdjustComponent} from './adjust/adjust.component';
import {TitledDropDownComponent} from '../../../components/titled-drop-down/titled-drop-down.component';
import {FurtherInfoComponent} from './further-info/further-info.component';
import {HeaderInfoComponent} from '../../../components/header-info/header-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPageRoutingModule
  ],
  declarations: [WebPage, PopUpComponent, AdjustComponent, FurtherInfoComponent, TitledDropDownComponent, HeaderInfoComponent]
})
export class WebPageModule {}
