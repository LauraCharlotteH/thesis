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
  {
    path: 'wikipedia',
    loadChildren: () => import('./pages/wikipedia/wikipedia.module').then( m => m.WikipediaPageModule)
  },
  {
    path: 'bild',
    loadChildren: () => import('./pages/bild/bild.module').then( m => m.BildPageModule)
  },
  {
    path: 'spiegel',
    loadChildren: () => import('./pages/spiegel/spiegel.module').then( m => m.SpiegelPageModule)
  },
  {
    path: 'gmx',
    loadChildren: () => import('./pages/gmx/gmx.module').then( m => m.GmxPageModule)
  },
  {
    path: 'web',
    loadChildren: () => import('./pages/web/web.module').then( m => m.WebPageModule)
  },
  {
    path: 'ebay',
    loadChildren: () => import('./pages/ebay/ebay.module').then( m => m.EbayPageModule)
  },
  {
    path: 'final',
    loadChildren: () => import('./pages/final/final.module').then( m => m.FinalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
