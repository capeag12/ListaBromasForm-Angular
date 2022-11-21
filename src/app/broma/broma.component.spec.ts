import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BromaComponent } from './broma.component';

describe('BromaComponent', () => {
  let component: BromaComponent;
  let fixture: ComponentFixture<BromaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BromaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BromaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
