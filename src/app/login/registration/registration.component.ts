import { Component, OnInit } from '@angular/core';
import { states } from 'src/app/utils/state';
import { countries } from 'src/app/utils/country';

// Backend imports
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import {finalize} from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase} from '@angular/fire/database';
// For compress image in database for profile picture
//import {readAndCompressImage} from "browser-image-resizer";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  


  //email:any = null;
  constructor(
    private auth: AuthService,
    private router:Router,
    private db:AngularFireDatabase,
    private storage: AngularFireStorage,
    private toast: ToastrService
  ) { 
    // auth.getUser().subscribe((user) =>{
    //   console.log("USER IS: ",user);
    //   this.email = user?.email;
    // });
  }
  ngOnInit(): void {}
  
  // For dropdown menu of state and Country
  state = states;
  Countries = countries;

  onSubmit(f:NgForm){
    const{
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      state,
      country,
      school
    } = f.form.value;

    // further sanitization
    this.auth.signUp(email,password)
    .then((res)=>{
      console.log(res);
      const uid = res.user;

      this.db.object(`/${uid}`)
      .set({
        id:uid,
        firstName:firstName,
        lastName:lastName,
        email:email,
        state:state,
        country:country,
        school:school
      })
    })
    .then(()=>{
      this.toast.success("Sign up");
    })
    .catch(()=>{
      this.toast.error("Error in sign up");
    })

  }

  // async handleSignOut(){
  //   try{
  //     await this.auth.SignOut();

  //     //this.router.navigateByUrl("/signIn");
  //     this.toast.info("Logout Success");
  //     this.email = null;``
  //   }catch{
  //     this.toast.error("Problem in signout");
  //   }
  //}
}
