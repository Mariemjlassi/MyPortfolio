import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionObserverComponent } from './section-observer.component';

describe('SectionObserverComponent', () => {
  let component: SectionObserverComponent;
  let fixture: ComponentFixture<SectionObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionObserverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
