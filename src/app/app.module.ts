import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from  '@angular//fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBRrIRwd2ny6VwXfREfVmytTUsw4srL3WY",
      authDomain: "part-time-demon.firebaseapp.com",
      projectId: "part-time-demon",
      storageBucket: "part-time-demon.appspot.com",
      messagingSenderId: "324796452134",
      appId: "1:324796452134:web:7360f44632cbe0ff8e05e7"
    }),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
