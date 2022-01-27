import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleCardPageComponent } from './simple-card-page/simple-card-page.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';

import {  ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCardPageComponent,
    CheckoutFormComponent,
    ParentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,// animations
    InputTextModule,  //ngPrime input text 
    InputMaskModule,  //ngPrime mask validation (MM/YY in credit card)
    PasswordModule, //ngPrime CVV input
    ButtonModule //ngPrime buttons
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
