import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WikipediaPageRoutingModule } from './wikipedia-routing.module';

import { WikipediaPage } from './wikipedia.page';
import {HeaderInfoComponent} from '../../../components/header-info/header-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WikipediaPageRoutingModule
  ],
  declarations: [WikipediaPage, HeaderInfoComponent]
})
export class WikipediaPageModule {}
