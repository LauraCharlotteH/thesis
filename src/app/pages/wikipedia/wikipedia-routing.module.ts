import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WikipediaPage } from './wikipedia.page';

const routes: Routes = [
  {
    path: '',
    component: WikipediaPage
  },
  {
    path: 'cookie-statement',
    loadChildren: () => import('./cookie-statement/cookie-statement.module').then( m => m.CookieStatementPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WikipediaPageRoutingModule {}
