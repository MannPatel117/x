import { Injectable, NgZone, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(public afAuth: Auth, private router : Router, public ngZone: NgZone){
    
   }

   async register(email : string, password : string) {
      try{
        console.log("I am tried")
        const user= await createUserWithEmailAndPassword(this.afAuth, email, password);
        console.log("I am not tried")
        this.router.navigate(['/home']);
        return user;
      }
      
      catch(e){
        console.log(e);
        return null;
      }
    }

    logout() {
      console.log(this.afAuth.currentUser);
      this.router.navigate(['/register']);
      return this.afAuth.signOut();
      

    }
}
