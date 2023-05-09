import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/app/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/app/news/news.module').then((m) => m.NewsPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/app/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'favourites',
    loadChildren: () =>
      import('./pages/app/favourites/favourites.module').then(
        (m) => m.FavouritesPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'news-detailed',
    loadChildren: () => import('./pages/app/news-detailed/news-detailed.module').then( m => m.NewsDetailedPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
