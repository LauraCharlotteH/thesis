import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeforeCookiesPageRoutingModule } from './before-cookies-routing.module';

import { BeforeCookiesPage } from './before-cookies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeforeCookiesPageRoutingModule
  ],
  declarations: [BeforeCookiesPage]
})
export class BeforeCookiesPageModule {}
