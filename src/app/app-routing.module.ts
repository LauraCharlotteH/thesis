import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'oplis',
    loadChildren: () => import('./pages/oplis/oplis.module').then( m => m.OPLISPageModule)
  },
  {
    path: 'before-cookies',
    loadChildren: () => import('./pages/before-cookies/before-cookies.module').then( m => m.BeforeCookiesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
