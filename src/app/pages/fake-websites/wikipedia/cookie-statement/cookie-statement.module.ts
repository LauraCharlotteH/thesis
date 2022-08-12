import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookieStatementPageRoutingModule } from './cookie-statement-routing.module';

import { CookieStatementPage } from './cookie-statement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookieStatementPageRoutingModule
  ],
  declarations: [CookieStatementPage]
})
export class CookieStatementPageModule {}
