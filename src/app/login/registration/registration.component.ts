import { Component, OnInit } from '@angular/core';
import { states } from 'src/app/utils/state';
import { countries } from 'src/app/utils/country';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  constructor() { 
  }
  ngOnInit(): void {}
  
  // For dropdown menu of state and Country
  state = states;
  Countries = countries;
}
