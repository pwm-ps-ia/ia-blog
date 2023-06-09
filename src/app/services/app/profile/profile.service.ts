import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc, doc, query, where, deleteDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from 'src/main';
import { User } from 'src/types/db/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  

  getProfile(userUid: string) {
    return getDocs(query(collection(db, "profiles"), where("user_id", "==", userUid)));
  }

  updateProfile(profUid: string, profile: any) {
    return updateDoc(doc(db, "profiles", profUid), profile);
  }

  createProfile(user: User) {
    return setDoc(doc(db, "profiles"), user);
  }
}
