import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OPLISPage } from './oplis.page';

const routes: Routes = [
  {
    path: '',
    component: OPLISPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OPLISPageRoutingModule {}
