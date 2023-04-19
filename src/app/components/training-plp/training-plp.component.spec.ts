import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlpComponent } from './training-plp.component';

describe('TrainingPlpComponent', () => {
  let component: TrainingPlpComponent;
  let fixture: ComponentFixture<TrainingPlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPlpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
