import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';
import { AdListingComponent } from './ad-listing/ad-listing.component';



@NgModule({
  declarations: [
    AppComponent,
    AdListingComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    AngularFirestoreModule,
    // AngularFireAuth,
    AngularFireDatabaseModule,
    AngularFireStorageModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
