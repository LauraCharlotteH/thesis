import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GmxPage } from './gmx.page';

const routes: Routes = [
  {
    path: '',
    component: GmxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GmxPageRoutingModule {}
