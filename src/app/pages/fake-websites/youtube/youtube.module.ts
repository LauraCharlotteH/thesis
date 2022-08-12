import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoutubePageRoutingModule } from './youtube-routing.module';

import { YoutubePage } from './youtube.page';
import {PopUpComponent} from './modal/pop-up/pop-up.component';
import {AdjustComponent} from './modal/adjust/adjust.component';
import {DropDownComponent} from '../../../components/drop-down/drop-down.component';
import {TitledDropDownComponent} from '../../../components/titled-drop-down/titled-drop-down.component';
import {HeaderInfoComponent} from '../../../components/header-info/header-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoutubePageRoutingModule
  ],
  declarations: [YoutubePage, PopUpComponent, AdjustComponent, DropDownComponent, TitledDropDownComponent, HeaderInfoComponent]
})
export class YoutubePageModule {}
