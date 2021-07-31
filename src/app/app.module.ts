import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { SigninComponent } from './login/signin/signin.component';
import { PagenotfoundComponent } from './login/pagenotfound/pagenotfound.component';

//toast module
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//forms module
import { FormsModule }   from '@angular/forms';

//firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

//import environment
import { environment } from "./../environments/environment"

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SigninComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
