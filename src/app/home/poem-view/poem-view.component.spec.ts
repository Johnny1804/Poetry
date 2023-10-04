import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemViewComponent } from './poem-view.component';

describe('PoemViewComponent', () => {
  let component: PoemViewComponent;
  let fixture: ComponentFixture<PoemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoemViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
