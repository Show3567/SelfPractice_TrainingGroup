import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaInterviewCanvasComponent } from './tesla-interview-canvas.component';

describe('TeslaInterviewCanvasComponent', () => {
  let component: TeslaInterviewCanvasComponent;
  let fixture: ComponentFixture<TeslaInterviewCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeslaInterviewCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeslaInterviewCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
