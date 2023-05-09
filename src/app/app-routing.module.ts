import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from 'src/guards/logged/logged.guard';
import { UnloggedGuard } from 'src/guards/unlogged/unlogged.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedGuard],
    loadChildren: () =>
      import('./pages/app/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    canActivate: [UnloggedGuard],
    path: 'auth',
    loadChildren: () =>
      import(
        './pages/auth/stack-navigator/stack-navigator-routing.module'
      ).then((m) => m.StackNavigatorRoutingModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
