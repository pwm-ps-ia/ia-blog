import { Component, OnInit } from '@angular/core';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { NewsService } from 'src/app/services/app/news/news.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  docs: QueryDocumentSnapshot<DocumentData>[] = [];

  constructor(public authService: AuthService, public newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().then(x => {
      this.docs = x.docs
    });
  }
}
