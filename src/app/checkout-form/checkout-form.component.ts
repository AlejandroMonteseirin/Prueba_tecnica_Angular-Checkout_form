import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {creditCardValidator} from '../validators/validators'
import {expirationDateValidator} from '../validators/validators'
import {onlyNumbers} from '../validators/validators'

import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})


export class CheckoutFormComponent implements OnInit {

  @Output() newCreditCardInfoEvent = new EventEmitter<string>();

  checkoutForm: any;

  /* This components contains the checkout form programming, its reusable*/
  constructor() { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      fullName: new FormControl('',[Validators.required]),
      // validating the credit card we need a length beetween 13 an 16 and check the Luhn algorithm(validators.ts creditCardValidator)
      cardNumber: new FormControl('',[creditCardValidator()]), 
      //expiration date must check that the card is not expired and that the month is less than 12
      expirationDate: new FormControl('',[Validators.required,expirationDateValidator()]),
      cvv: new FormControl('',[Validators.required,onlyNumbers(3,4)]), 
      zipcode :new FormControl('',[Validators.required]), 
    });
  }
  get fullName() { return this.checkoutForm.get('fullName'); }
  get cardNumber() { return this.checkoutForm.get('cardNumber'); }
  get expirationDate() { return this.checkoutForm.get('expirationDate'); }
  get cvv() { return this.checkoutForm.get('cvv'); }
  get zipcode() { return this.checkoutForm.get('zipcode'); }


  onSubmit(){
    this.newCreditCardInfoEvent.emit(this.checkoutForm.value);
  }

}
