import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentData, DocumentSnapshot } from 'firebase/firestore';
import { NewsService } from 'src/app/services/app/news/news.service';

@Component({
  selector: 'app-news-detailed',
  templateUrl: './news-detailed.page.html',
  styleUrls: ['./news-detailed.page.scss'],
})
export class NewsDetailedPage implements OnInit {
  news!: DocumentSnapshot<DocumentData>;

  constructor(
    public route: ActivatedRoute,
    public newsService: NewsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.newsService.getNew(x['id']).then(y => {
        this.news = y;
      })
    })
  }

}
