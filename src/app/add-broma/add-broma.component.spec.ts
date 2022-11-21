import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBromaComponent } from './add-broma.component';

describe('AddBromaComponent', () => {
  let component: AddBromaComponent;
  let fixture: ComponentFixture<AddBromaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBromaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBromaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
