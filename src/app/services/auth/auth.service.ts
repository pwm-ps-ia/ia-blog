import { Injectable } from '@angular/core';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { UserLogin, UserRegister } from 'src/types/db/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    return false;
  }

  public async login(payload: UserLogin) {
    const auth = getAuth();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      console.log(response.user.email);
      console.log('login success');
    } catch (err: any) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log('error login');
    }
  }
  public async register(payload: UserRegister) {
    const auth = getAuth();

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      console.log(response.user.email);
      console.log('success');
    } catch (err: any) {
      console.log('error');
    }
  }
  public logOut() {}
}
