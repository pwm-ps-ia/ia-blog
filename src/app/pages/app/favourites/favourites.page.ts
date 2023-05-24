import { Component, OnInit } from '@angular/core';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { FavsService } from 'src/app/services/app/favs/favs.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  favs: QueryDocumentSnapshot<DocumentData>[] = [];

  constructor(public favService: FavsService, public authService: AuthService) { }

  ngOnInit() {
    this.favService.getFavs(this.authService.user?.uid ?? '').then(x => {
      this.favs = x.docs;
    });
  }

  removeFav() {

  }

  addFav() {

  }

}
