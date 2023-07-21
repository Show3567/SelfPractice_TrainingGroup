import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcarouselComponent } from './testcarousel.component';

describe('TestcarouselComponent', () => {
  let component: TestcarouselComponent;
  let fixture: ComponentFixture<TestcarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestcarouselComponent]
    });
    fixture = TestBed.createComponent(TestcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
