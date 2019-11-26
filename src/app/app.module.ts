import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayListComponent } from './display-list/display-list.component';


/*
  import these three classes to allow for the use of firebase database and
  firebase authentication.
*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

/*
  because we are setting firebase credentials in the environments.ts file
  we need to import it here so the authentication and database calls can access
  the information needed.
*/
import { environment } from '../environments/environment';

/*
  imported for custom HTML forms that bind form data to typescript variables.
  Not used in this project.
*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DisplayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // declare firebase directives
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features


    // for the use of forms for the login information.
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
