import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-favourite-card',
  templateUrl: './favourite-card.component.html',
  styleUrls: ['./favourite-card.component.scss'],
})
export class FavouriteCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  onClick () {
    this.favClick.emit(this.fav.id);
  }

  @Input() fav!: QueryDocumentSnapshot<DocumentData>;
  @Output() favClick = new EventEmitter<string>();
}
