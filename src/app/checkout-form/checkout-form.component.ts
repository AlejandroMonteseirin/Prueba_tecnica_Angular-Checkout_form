import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {creditCardValidator} from '../validators/validators'


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})


export class CheckoutFormComponent implements OnInit {

  
  checkoutForm: any;

  /* This components contains the checkout form programming, its reusable*/
  constructor() { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      fullName: new FormControl('',[Validators.required]),
      // validating the credit card we need a lenght beetween 13 an 16 and check the Luhn algorithm(validators.ts creditCardValidator)
      cardNumber: new FormControl('',[Validators.required,Validators.minLength(13),Validators.maxLength(16),creditCardValidator()]), 
      
    });
  }
  get fullName() { return this.checkoutForm.get('fullName'); }
  get cardNumber() { return this.checkoutForm.get('cardNumber'); }


  onSubmit(){
    console.warn(this.checkoutForm.value);

  }

}
