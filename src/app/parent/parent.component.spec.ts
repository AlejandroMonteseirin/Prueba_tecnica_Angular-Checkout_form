import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { SimpleCardPageComponent } from '../simple-card-page/simple-card-page.component';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent ,SimpleCardPageComponent,
        CheckoutFormComponent],
      providers: [
        MessageService 
      ], imports: [ToastModule,ReactiveFormsModule,InputMaskModule,InputTextModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
