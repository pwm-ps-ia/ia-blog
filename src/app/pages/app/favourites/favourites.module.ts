import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritesPageRoutingModule } from './favourites-routing.module';

import { FavouritesPage } from './favourites.page';
import { FavouriteCardComponent } from 'src/app/components/favourite/favourite-card/favourite-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritesPageRoutingModule,
  ],
  declarations: [FavouritesPage, FavouriteCardComponent]
})
export class FavouritesPageModule {}
