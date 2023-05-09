import { Injectable } from '@angular/core';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';
import { UserLogin, UserRegister } from 'src/types/db/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    return false;
  }

  public login(payload: UserLogin) {}
  public register(payload: UserRegister) {}
  public logOut() {}
}
