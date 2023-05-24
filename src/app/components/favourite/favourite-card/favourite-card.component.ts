import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  DocumentData,
  DocumentSnapshot,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

@Component({
  selector: 'app-favourite-card',
  templateUrl: './favourite-card.component.html',
  styleUrls: ['./favourite-card.component.scss'],
})
export class FavouriteCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.favClick.emit(this.fav.id);
  }

  @Input() fav!: QueryDocumentSnapshot<DocumentData>;
  @Input() news!: DocumentSnapshot<DocumentData>;
  @Output() favClick = new EventEmitter<string>();
}
