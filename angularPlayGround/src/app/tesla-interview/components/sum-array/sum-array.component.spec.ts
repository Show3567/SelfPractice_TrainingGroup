import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumArrayComponent } from './sum-array.component';

describe('SumArrayComponent', () => {
  let component: SumArrayComponent;
  let fixture: ComponentFixture<SumArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
