import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleCardPageComponent } from './simple-card-page/simple-card-page.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';

import {  ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCardPageComponent,
    CheckoutFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,// animations
    InputTextModule  //ngPrime input text 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
