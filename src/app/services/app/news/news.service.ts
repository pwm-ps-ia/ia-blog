import { Injectable } from '@angular/core';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews() {
    return getDocs(collection(db, "news"));
  }

  getNew(newsUid: string) {
    return getDoc(doc(db, "news", newsUid));
  }
}
