import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmazonPage } from './amazon.page';

const routes: Routes = [
  {
    path: '',
    component: AmazonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmazonPageRoutingModule {}
