import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDetailedPageRoutingModule } from './news-detailed-routing.module';

import { NewsDetailedPage } from './news-detailed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDetailedPageRoutingModule
  ],
  declarations: [NewsDetailedPage]
})
export class NewsDetailedPageModule {}
