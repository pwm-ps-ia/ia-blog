import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc, doc, query, where, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  constructor() { }

  getFavs(userUid: string) {
    return getDocs(query(collection(db, "favourite_news"), where("user_id", "==", userUid)));
  }

  getFavNew(newsUid: string) {
    return getDoc(doc(db, "news", newsUid));
  }

  makeFav(userUid: string, newsUid: string) {
    return addDoc(collection(db, "favourite_news"), {
      "user_id": userUid,
      "news_id": newsUid,
    });
  }

  removeFav(favUid: string) {
    return deleteDoc(doc(db, "favourite_news", favUid));
  }
}
