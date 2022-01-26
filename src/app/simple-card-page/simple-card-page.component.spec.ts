import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCardPageComponent } from './simple-card-page.component';

describe('SimpleCardPageComponent', () => {
  let component: SimpleCardPageComponent;
  let fixture: ComponentFixture<SimpleCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
