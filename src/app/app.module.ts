import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2";
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import 'hammerjs';

import { routes } from './routes';
import { ListComponent } from './list/list.component';
import { TripService } from './common/trip.service';
import { CreateTripDialogComponent } from './create-trip-dialog/create-trip-dialog.component'
import {CreateTripService} from './common/create-trip.service';
import {CountryListService} from './common/country-list.service';

export const firebaseConfig = {
  apiKey: "AIzaSyBQNRIJboG04NYmD-VxJQHBppB7RIVLWrM",
  authDomain: "angularcoursework.firebaseapp.com",
  databaseURL: "https://angularcoursework.firebaseio.com",
  storageBucket: "angularcoursework.appspot.com",
  messagingSenderId: "602127487335"
};

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateTripDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [
    TripService,
    CreateTripService,
    CountryListService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreateTripDialogComponent]
})
export class AppModule { }
