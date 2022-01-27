import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFormComponent } from './checkout-form.component';
import {   ReactiveFormsModule } from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import { AppComponent } from '../app.component';

describe('CheckoutFormComponent', () => {
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutFormComponent ,AppComponent],
      imports: [ReactiveFormsModule,InputMaskModule,InputTextModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it(`None of the error messages are visibles in the start`, () => {
    
    const fixture = TestBed.createComponent(CheckoutFormComponent);
    fixture.detectChanges() ;
    expect(fixture.debugElement.nativeElement.querySelector('#fullname-help').style.visibility).toBe("hidden");
    expect(fixture.debugElement.nativeElement.querySelector('#cardNumber-help').style.visibility).toBe("hidden");
    expect(fixture.debugElement.nativeElement.querySelector('#expiration-help').style.visibility).toBe("hidden");
    expect(fixture.debugElement.nativeElement.querySelector('#cvv-help').style.visibility).toBe("hidden");
    expect(fixture.debugElement.nativeElement.querySelector('#zipcode-help').style.visibility).toBe("hidden");

    
  });

  it(`If clicked in name but dont put anything it show its required`, () => {
    
    const fixture = TestBed.createComponent(CheckoutFormComponent);
    const fullNameInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#fullName');

    fixture.detectChanges() ;

    expect(fixture.debugElement.nativeElement.querySelector('#fullname-help').style.visibility).toBe("hidden");

    fullNameInput.value = '';

    fullNameInput.dispatchEvent(new Event('input'));

    expect(fullNameInput.value).toBe('');


    
    fixture.detectChanges() ;
    const errorfullNameInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#fullname-help');
    expect(errorfullNameInput.style.visibility).toBe("visible");


  });


  it(`If enter 1234 as a credit card its show a error`, () => {
    
    const fixture = TestBed.createComponent(CheckoutFormComponent);
    const cardInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cardNumber');

    fixture.detectChanges();

    cardInput.value = '1234';

    cardInput.dispatchEvent(new Event('input'));

    expect(cardInput.value).toBe('1234');


    
    fixture.detectChanges() ;

    const errorCardNumber=fixture.debugElement.nativeElement.querySelector('#cardNumber-help');
    expect(errorCardNumber.style.visibility).toBe("visible");

    
    
  });

  it(`Multiple credit card validations (3 positive tests and 3 negative tests)`, () => {
    
    const fixture = TestBed.createComponent(CheckoutFormComponent);
    let cardInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cardNumber');

    //Negative 1
    fixture.detectChanges();

    cardInput.value = '1234567891234567';//invalid credit card

    cardInput.dispatchEvent(new Event('input'));

    expect(cardInput.value).toBe('1234567891234567');


    
    fixture.detectChanges() ;
    let errorCardNumber=fixture.debugElement.nativeElement.querySelector('#cardNumber-help');
    expect(errorCardNumber.style.visibility).toBe("visible");


    //Positive 1
    fixture.detectChanges();

    cardInput.value = '4818664510117242';//valid credit card

    cardInput.dispatchEvent(new Event('input'));

    expect(cardInput.value).toBe('4818664510117242');


    fixture.detectChanges() ;

    errorCardNumber=fixture.debugElement.nativeElement.querySelector('#cardNumber-help');
    expect(errorCardNumber.style.visibility).toBe("hidden");

    //Negative 2
    fixture.detectChanges();

    cardInput.value = '4818664510117243'; //invalid credit card

    cardInput.dispatchEvent(new Event('input'));

    expect(cardInput.value).toBe('4818664510117243');



    fixture.detectChanges() ;
    errorCardNumber=fixture.debugElement.nativeElement.querySelector('#cardNumber-help');
    expect(errorCardNumber.style.visibility).toBe("visible");

    //Positive 2
    fixture.detectChanges();

    cardInput.value = '5556385031680350'; 

    cardInput.dispatchEvent(new Event('input'));

    expect(cardInput.value).toBe('5556385031680350');


    fixture.detectChanges() ;

    errorCardNumber=fixture.debugElement.nativeElement.querySelector('#cardNumber-help');
    expect(errorCardNumber.style.visibility).toBe("hidden");

    //Negative 3
    fixture.detectChanges();

    cardInput.value = 'Thisisnotacreditcard';

    cardInput.dispatchEvent(new Event('input'));

    expect(cardInput.value).toBe('Thisisnotacreditcard');

    //Positive 3
    cardInput.value = '4111111111111111'; 

    cardInput.dispatchEvent(new Event('input'));

    expect(cardInput.value).toBe('4111111111111111');


    fixture.detectChanges() ;

    errorCardNumber=fixture.debugElement.nativeElement.querySelector('#cardNumber-help');
    expect(errorCardNumber.style.visibility).toBe("hidden");


  });
  
  it(`CVV validation (must have 3-4 digits)`, () => {
    
    const fixture = TestBed.createComponent(CheckoutFormComponent);
    let cvvInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cvv');

    //Negative 1
    fixture.detectChanges();

    cvvInput.value = '1234567891234567';//invalid credit card

    cvvInput.dispatchEvent(new Event('input'));

    expect(cvvInput.value).toBe('1234567891234567');

    fixture.detectChanges() ;

    let errorcvv=fixture.debugElement.nativeElement.querySelector('#cvv-help');
    expect(errorcvv.style.visibility).toBe("visible");

    //Negative 2
    fixture.detectChanges();

    cvvInput.value = 'abc4';//invalid credit card

    cvvInput.dispatchEvent(new Event('input'));

    expect(cvvInput.value).toBe('abc4');

    fixture.detectChanges() ;

    errorcvv=fixture.debugElement.nativeElement.querySelector('#cvv-help');
    expect(errorcvv.style.visibility).toBe("visible");

    //Negative 3
    fixture.detectChanges();

    cvvInput.value = '4442e';//invalid credit card

    cvvInput.dispatchEvent(new Event('input'));

    expect(cvvInput.value).toBe('4442e');

    fixture.detectChanges() ;

    errorcvv=fixture.debugElement.nativeElement.querySelector('#cvv-help');
    expect(errorcvv.style.visibility).toBe("visible");

    //Positive 1
    fixture.detectChanges();

    cvvInput.value = '1234';//invalid credit card

    cvvInput.dispatchEvent(new Event('input'));

    expect(cvvInput.value).toBe('1234');

    fixture.detectChanges() ;

    errorcvv=fixture.debugElement.nativeElement.querySelector('#cvv-help');
    expect(errorcvv.style.visibility).toBe("hidden");

  });

  it(`If the entered data is correct, there are no errors showed and the submit button stop being disabled`, () => {
    
    const fixture = TestBed.createComponent(CheckoutFormComponent);

    component = fixture.componentInstance;

    const cardInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cardNumber');
    const fullnameInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#fullName');
    const cvvInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cvv');
    const zipcodeInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#zipcode');

    
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#submit').disabled).toBe(true);

    cardInput.value = '4111111111111111';

    cardInput.dispatchEvent(new Event('input'));

    fullnameInput.value = 'Alejandro Monteseirin Puig';

    fullnameInput.dispatchEvent(new Event('input'));

    cvvInput.value = '123';

    cvvInput.dispatchEvent(new Event('input'));

  
    //expiration date cannot be easily tested because being a p-inputMask, so we workarround this test part
    component.checkoutForm.patchValue({
      expirationDate: "11/99", 
    });

    zipcodeInput.value = '41004';

    zipcodeInput.dispatchEvent(new Event('input'));



    
    fixture.detectChanges() ;

    expect(fixture.debugElement.nativeElement.querySelector('#fullname-help').style.visibility).toBe("hidden");
    expect(fixture.debugElement.nativeElement.querySelector('#cardNumber-help').style.visibility).toBe("hidden");
    expect(fixture.debugElement.nativeElement.querySelector('#expiration-help').style.visibility).toBe("hidden");
    expect(fixture.debugElement.nativeElement.querySelector('#cvv-help').style.visibility).toBe("hidden");
    expect(fixture.debugElement.nativeElement.querySelector('#zipcode-help').style.visibility).toBe("hidden");

    expect(fixture.debugElement.nativeElement.querySelector('#submit').disabled).toBe(false);

    
    
  });


  

});

