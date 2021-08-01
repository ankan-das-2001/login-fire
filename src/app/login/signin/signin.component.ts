import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
  }

  email:string = '';

  onSubmit(formData:NgForm) {
    const{email,password} = formData.form.value;
    this.email=email;
    this.auth.signIn(email,password).then(()=>{
      this.toast.success("Successfully Sign In");
    })
    .catch((err)=>{
      console.log(err);    // Used for debugging
      this.toast.error("Error Sign In");
    });


  }

  // kajori added
  // const inputs = document.querySelectorAll(".input");


  // addcl(){
  //   let parent = this.parentNode.parentNode;
  //   parent.classList.add("focus");
  // }

  // remcl(){
  //   let parent = this.parentNode.parentNode;
  //   if(this.value == ""){
  //     parent.classList.remove("focus");
  //   }
  // }


  // this.inputs.forEach(input => {
  //   input.addEventListener("focus", addcl);
  //   input.addEventListener("blur", remcl);
  // });

}
