import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StackNavigatorComponent } from './stack-navigator.component';

const routes: Routes = [
  {
    path: 'auth',
    component: StackNavigatorComponent,
    children: [
      {
        path: 'register',
        loadChildren: () =>
          import('../login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'login',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class StackNavigatorRoutingModule {}
