import { Component, OnInit } from '@angular/core';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { FavsService } from 'src/app/services/app/favs/favs.service';
import { NewsService } from 'src/app/services/app/news/news.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  docs: QueryDocumentSnapshot<DocumentData>[] = [];
  favs: boolean[] = [];
  newsToFavMap = new Map<string, string>();

  constructor(
    public authService: AuthService,
    public newsService: NewsService,
    public favService: FavsService
  ) {}

  ionViewWillEnter() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.newsService.getNews().then((x) => {
      this.docs = x.docs;
      x.docs
        .map((y) => y.id)
        .forEach((y) =>
          this.favService.getNewsFav(y).then((z) => {
            this.favs.push(z.docs.length >= 1);
            if (z.docs.length >= 1) {
              this.newsToFavMap.set(y, z.docs[0].id);
            }
          })
        );
    });
  }

  isFav(newsUid: string) {
    return this.favs[this.docs.findIndex((x) => x.id === newsUid)];
  }

  toggleFav(newsUid: string) {
    const favIndex = this.docs.findIndex((x) => x.id === newsUid);
    const fav = this.favs[favIndex];
    console.log('estamos', fav);

    if (!fav) {
      this.favService
        .makeFav(this.authService.user?.uid ?? '', newsUid)
        .then((x) => {
          this.newsToFavMap.set(newsUid, x.id);
          this.favs[favIndex] = true;
        });
    } else if (this.newsToFavMap.has(newsUid)) {
      this.favService.removeFav(this.newsToFavMap.get(newsUid) ?? '');
      this.favs[favIndex] = false;
    }
  }
}
