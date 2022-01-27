import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFormComponent } from './checkout-form.component';

describe('CheckoutFormComponent', () => {
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutFormComponent ]
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
    expect(fixture.debugElement.nativeElement.querySelector('#fullname-help').hasAttribute('hidden') &&
    fixture.debugElement.nativeElement.querySelector('#cardNumber-help').hasAttribute('hidden') &&
    fixture.debugElement.nativeElement.querySelector('#expiration-help').hasAttribute('hidden') &&
    fixture.debugElement.nativeElement.querySelector('#cvv-help').hasAttribute('hidden') &&
    fixture.debugElement.nativeElement.querySelector('#zipcode-help').hasAttribute('hidden')
    ).toBeTrue();
  });
});
