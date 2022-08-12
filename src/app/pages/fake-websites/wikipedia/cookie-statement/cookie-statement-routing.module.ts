import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookieStatementPage } from './cookie-statement.page';

const routes: Routes = [
  {
    path: '',
    component: CookieStatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookieStatementPageRoutingModule {}
