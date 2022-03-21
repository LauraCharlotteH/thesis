import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoutubePageRoutingModule } from './youtube-routing.module';

import { YoutubePage } from './youtube.page';
import {PopUpComponent} from './modal/pop-up/pop-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoutubePageRoutingModule
  ],
  declarations: [YoutubePage, PopUpComponent]
})
export class YoutubePageModule {}
