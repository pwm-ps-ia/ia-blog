import { Injectable } from '@angular/core';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews() {
    return getDocs(collection(db, "news"));
  }
}
