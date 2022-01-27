import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { SimpleCardPageComponent } from './simple-card-page/simple-card-page.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import {  ReactiveFormsModule } from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,ToastModule,ReactiveFormsModule,InputMaskModule,InputTextModule
      ],
      declarations: [
        AppComponent,ParentComponent,SimpleCardPageComponent,
        CheckoutFormComponent,
      ],providers: [
        MessageService 
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AlejandroMonteseirin_checkout_form'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AlejandroMonteseirin_checkout_form');
  });

});
