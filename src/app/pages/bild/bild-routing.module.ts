import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BildPage } from './bild.page';

const routes: Routes = [
  {
    path: '',
    component: BildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BildPageRoutingModule {}
