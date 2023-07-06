import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRtcRmtComponent } from './web-rtc-rmt.component';

describe('WebRtcRmtComponent', () => {
  let component: WebRtcRmtComponent;
  let fixture: ComponentFixture<WebRtcRmtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WebRtcRmtComponent]
    });
    fixture = TestBed.createComponent(WebRtcRmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
