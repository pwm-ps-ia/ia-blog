import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NewsCardComponent } from 'src/app/components/news/news-card/news-card.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  constructor(public authService: AuthService) {}
  NewsCardComponent = NewsCardComponent;
  ngOnInit() {}
}
