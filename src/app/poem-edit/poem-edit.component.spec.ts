import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemEditComponent } from './poem-edit.component';

describe('PoemEditComponent', () => {
  let component: PoemEditComponent;
  let fixture: ComponentFixture<PoemEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoemEditComponent]
    });
    fixture = TestBed.createComponent(PoemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
