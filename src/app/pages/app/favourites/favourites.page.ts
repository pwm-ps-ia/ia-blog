import { Component, OnInit } from '@angular/core';
import {
  DocumentData,
  DocumentSnapshot,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { FavsService } from 'src/app/services/app/favs/favs.service';
import { NewsService } from 'src/app/services/app/news/news.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  favs: QueryDocumentSnapshot<DocumentData>[] = [];
  docs: DocumentSnapshot<DocumentData>[] = [];

  constructor(
    public favService: FavsService,
    public authService: AuthService,
    public newsService: NewsService
  ) {}

  ionViewWillEnter() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.favService.getFavs(this.authService.user?.uid ?? '').then((x) => {
      this.favs = x.docs;
      x.docs
        .map((y) => y.get('news_id'))
        .forEach((y) =>
          this.favService.getFavNew(y).then((z) => {
            this.docs.push(z);
          })
        );
    });
  }

  getNews(favUid: string) {
    return this.docs[this.favs.findIndex((x) => x.id === favUid)];
  }

  removeFav(favUid: string) {
    this.favService
      .removeFav(favUid)
      .then((x) => {
        this.favs.filter((x) => x.id !== favUid);
      })
      .catch((e) => {
        console.error('Ha habido un error inesperado', e);
      });
  }
}
