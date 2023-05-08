import { Injectable } from '@angular/core';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    const unsub = onSnapshot(collection(db, 'favourite_news'), (doc) => {
      doc.forEach((x) => console.log(x.data()));
    });
  }
}
