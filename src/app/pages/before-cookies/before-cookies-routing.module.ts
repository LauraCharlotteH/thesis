import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeforeCookiesPage } from './before-cookies.page';

const routes: Routes = [
  {
    path: '',
    component: BeforeCookiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeforeCookiesPageRoutingModule {}
