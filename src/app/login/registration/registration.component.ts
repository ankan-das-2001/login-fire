import { Component, OnInit } from '@angular/core';
import { states } from 'src/app/utils/state';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  state = states;
  statesw:any;
  constructor() { 
  }
  ngOnInit(): void {
    this.statesw = states;
    console.log(this.statesw);
  }

}
