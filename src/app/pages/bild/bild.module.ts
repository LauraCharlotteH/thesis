import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BildPageRoutingModule } from './bild-routing.module';

import { BildPage } from './bild.page';
import {PopUpComponent} from './pop-up/pop-up.component';
import {TitledDropDownComponent} from '../../components/titled-drop-down/titled-drop-down.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BildPageRoutingModule
  ],
  declarations: [BildPage, PopUpComponent, TitledDropDownComponent]
})
export class BildPageModule {}
