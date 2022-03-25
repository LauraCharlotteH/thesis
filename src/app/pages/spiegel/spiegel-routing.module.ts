import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpiegelPage } from './spiegel.page';

const routes: Routes = [
  {
    path: '',
    component: SpiegelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpiegelPageRoutingModule {}
