import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { SigninComponent } from './login/signin/signin.component';
import { PagenotfoundComponent } from './login/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SigninComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
