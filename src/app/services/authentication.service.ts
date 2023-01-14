import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user: any;
  constructor(private auth: Auth, private route: Router) {}

  googleLogin() {
    signInWithPopup(this.auth, new GoogleAuthProvider()).then(
      async (credentials: UserCredential) => {
        this.user = credentials.user;
        this.route.navigate(['/get-started']);
      }
    );
  }
  emailLogin(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  emailSignup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    return signOut(this.auth);
  }
  anonymousSignIn() {
    return signInAnonymously(this.auth);
  }
}
