import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRTCComponent } from './web-rtc.component';

describe('WebRTCComponent', () => {
  let component: WebRTCComponent;
  let fixture: ComponentFixture<WebRTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebRTCComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebRTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
