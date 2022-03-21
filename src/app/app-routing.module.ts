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
  {
    path: 'google',
    loadChildren: () => import('./pages/google/google.module').then( m => m.GooglePageModule)
  },
  {
    path: 'youtube',
    loadChildren: () => import('./pages/youtube/youtube.module').then( m => m.YoutubePageModule)
  },
  {
    path: 'facebook',
    loadChildren: () => import('./pages/facebook/facebook.module').then( m => m.FacebookPageModule)
  },
  {
    path: 'amazon',
    loadChildren: () => import('./pages/amazon/amazon.module').then( m => m.AmazonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
