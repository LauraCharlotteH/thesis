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
    path: 'questionnaire',
    loadChildren: () => import('./pages/questionnaire/questionnaire.module').then(m => m.QuestionnairePageModule)
  },
  {
    path: 'google',
    loadChildren: () => import('./pages/fake-websites/google/google.module').then(m => m.GooglePageModule)
  },
  {
    path: 'youtube',
    loadChildren: () => import('./pages/fake-websites/youtube/youtube.module').then(m => m.YoutubePageModule)
  },
  {
    path: 'facebook',
    loadChildren: () => import('./pages/fake-websites/facebook/facebook.module').then(m => m.FacebookPageModule)
  },
  {
    path: 'amazon',
    loadChildren: () => import('./pages/fake-websites/amazon/amazon.module').then(m => m.AmazonPageModule)
  },
  {
    path: 'wikipedia',
    loadChildren: () => import('./pages/fake-websites/wikipedia/wikipedia.module').then(m => m.WikipediaPageModule)
  },
  {
    path: 'bild',
    loadChildren: () => import('./pages/fake-websites/bild/bild.module').then(m => m.BildPageModule)
  },
  {
    path: 'spiegel',
    loadChildren: () => import('./pages/fake-websites/spiegel/spiegel.module').then(m => m.SpiegelPageModule)
  },
  {
    path: 'gmx',
    loadChildren: () => import('./pages/fake-websites/gmx/gmx.module').then(m => m.GmxPageModule)
  },
  {
    path: 'web',
    loadChildren: () => import('./pages/fake-websites/web/web.module').then(m => m.WebPageModule)
  },
  {
    path: 'ebay',
    loadChildren: () => import('./pages/fake-websites/ebay/ebay.module').then(m => m.EbayPageModule)
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
