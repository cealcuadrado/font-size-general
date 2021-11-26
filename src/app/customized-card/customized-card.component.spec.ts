import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedCardComponent } from './customized-card.component';

describe('CustomizedCardComponent', () => {
  let component: CustomizedCardComponent;
  let fixture: ComponentFixture<CustomizedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
