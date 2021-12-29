import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkExamplesComponent } from './components/work-examples/work-examples.component';
import { ContactComponent } from './components/contact/contact.component';
import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { GalleryModule } from 'ng-gallery';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WorkExamplesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MatIconModule,
    MatSnackBarModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
