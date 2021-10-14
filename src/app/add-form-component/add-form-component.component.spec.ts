import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormComponentComponent } from './add-form-component.component';

describe('AddFormComponentComponent', () => {
  let component: AddFormComponentComponent;
  let fixture: ComponentFixture<AddFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
