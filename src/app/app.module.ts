import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LinksComponent } from './components/links/links.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkComponent } from './components/link/link.component';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { EditLinkComponent } from './components/edit-link/edit-link.component';

import {FirebaseService} from './services/firebase.service';

export const firebaseConfig = {
  apiKey: "AIzaSyAOjmXo4zpUfh1HaRxHaoMM4wzt03Fbkvc",
  authDomain: "linkslisting.firebaseapp.com",
  databaseURL: "https://linkslisting.firebaseio.com",
  storageBucket: "linkslisting.appspot.com",
  messagingSenderId: "277658696147"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinksComponent,
    NavbarComponent,
    LinkComponent,
    AddLinkComponent,
    EditLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    routing,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
