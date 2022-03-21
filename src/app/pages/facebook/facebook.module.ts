import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacebookPageRoutingModule } from './facebook-routing.module';

import { FacebookPage } from './facebook.page';
import {PopUpComponent} from './pop-up/pop-up.component';
import {TitledDropDownComponent} from '../../components/titled-drop-down/titled-drop-down.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacebookPageRoutingModule
  ],
  declarations: [FacebookPage, PopUpComponent, TitledDropDownComponent]
})
export class FacebookPageModule {}
