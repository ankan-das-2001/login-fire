import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : AngularFireAuth) { }

  signUp(email:string, password: string){
    return this.auth.createUserWithEmailAndPassword(email,password);  //makes a observable
  }

  signIn(email:string, password:string){
    return this.auth.signInWithEmailAndPassword(email,password);  //makes a observable
  }

  getUser(){
    return this.auth.authState;  //makes a observable
  }

  SignOut(){
    return this.auth.signOut();  //makes a observable
  }
}
