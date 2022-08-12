import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpiegelPageRoutingModule } from './spiegel-routing.module';

import { SpiegelPage } from './spiegel.page';
import {PopUpComponent} from './pop-up/pop-up.component';
import {TitledDropDownComponent} from '../../../components/titled-drop-down/titled-drop-down.component';
import {HeaderInfoComponent} from '../../../components/header-info/header-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpiegelPageRoutingModule
  ],
  declarations: [SpiegelPage, PopUpComponent, TitledDropDownComponent, HeaderInfoComponent]
})
export class SpiegelPageModule {}
