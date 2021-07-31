import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
