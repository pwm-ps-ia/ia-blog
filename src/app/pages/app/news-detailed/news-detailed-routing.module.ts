import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDetailedPage } from './news-detailed.page';

const routes: Routes = [
  {
    path: '',
    component: NewsDetailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsDetailedPageRoutingModule {}
