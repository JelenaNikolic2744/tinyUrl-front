import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUrlsComponent } from './allUrls.component';

describe('AllUrlsComponent', () => {
  let component: AllUrlsComponent;
  let fixture: ComponentFixture<AllUrlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUrlsComponent]
    });
    fixture = TestBed.createComponent(AllUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
