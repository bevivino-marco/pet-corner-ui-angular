import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyPlpComponent } from './therapy-plp.component';

describe('TherapyPlpComponent', () => {
  let component: TherapyPlpComponent;
  let fixture: ComponentFixture<TherapyPlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapyPlpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapyPlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
