import { Injectable } from '@angular/core';
import { collection, doc, onSnapshot } from 'firebase/firestore';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  browserSessionPersistence,
  setPersistence,
  inMemoryPersistence,
  User,
} from 'firebase/auth';
import { UserLogin, UserRegister } from 'src/types/db/user';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | null = null;

  constructor(public router: Router) {
    const auth = getAuth();
    auth.onAuthStateChanged((res) => {
      this.user = res;
      if (this.user) {
        router.navigate(['/news']);
      }
    });
  }

  public isAuthenticated(): boolean {
    return this.user ? true : false;
  }

  public async login(payload: UserLogin) {
    const auth = getAuth();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      response.user.uid;
    } catch (err: any) {
      const errorCode = err.code;
      const errorMessage = err.message;
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
      await this.login({
        email: payload.email,
        password: payload.password,
      });
    } catch (err: any) {}
  }
  public async logOut() {
    const auth = getAuth();
    const response = await auth.signOut();
    this.user = null;
    this.router.navigate(['/auth/login']);
  }
}
