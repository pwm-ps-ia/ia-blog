import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StackNavigatorComponent } from './stack-navigator.component';

const routes: Routes = [
  {
    path: '',
    component: StackNavigatorComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('../register/register.module').then(
            (m) => m.RegisterPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class StackNavigatorRoutingModule {}
