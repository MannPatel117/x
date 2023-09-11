import { Injectable, NgZone, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(public afAuth: AngularFireAuth, private router : Router, public ngZone: NgZone){
    
   }

   async register(email : string, password : string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      window.alert('success');
      console.log(result.user)

    })
    .catch((error) => {
      window.alert(error.message);
    });
  }

    logout() {
      console.log(this.afAuth.currentUser);
      this.router.navigate(['/register']);
      return this.afAuth.signOut();
      

    }
}
