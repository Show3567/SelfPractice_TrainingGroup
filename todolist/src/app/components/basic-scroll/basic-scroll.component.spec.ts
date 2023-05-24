import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicScrollComponent } from './basic-scroll.component';

describe('BasicScrollComponent', () => {
  let component: BasicScrollComponent;
  let fixture: ComponentFixture<BasicScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicScrollComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
