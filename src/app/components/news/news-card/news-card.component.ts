import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  onClick () {
    this.favClick.emit(this.news.id);
  }
  
  @Input() news!: QueryDocumentSnapshot<DocumentData>;
  @Input() isFav!: boolean;
  @Output() favClick = new EventEmitter();
}
