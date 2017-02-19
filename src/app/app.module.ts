import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2";
import { MaterialModule } from '@angular/material'

import { AppComponent } from './app.component';
import 'hammerjs';

export const firebaseConfig = {
  apiKey: "AIzaSyBQNRIJboG04NYmD-VxJQHBppB7RIVLWrM",
  authDomain: "angularcoursework.firebaseapp.com",
  databaseURL: "https://angularcoursework.firebaseio.com",
  storageBucket: "angularcoursework.appspot.com",
  messagingSenderId: "602127487335"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
