import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemCarouselViewComponent } from './poem-carousel-view.component';

describe('PoemCarouselViewComponent', () => {
  let component: PoemCarouselViewComponent;
  let fixture: ComponentFixture<PoemCarouselViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoemCarouselViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemCarouselViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
