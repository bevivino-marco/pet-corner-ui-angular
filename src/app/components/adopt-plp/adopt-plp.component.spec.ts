import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptPlpComponent } from './adopt-plp.component';

describe('AdoptPlpComponent', () => {
  let component: AdoptPlpComponent;
  let fixture: ComponentFixture<AdoptPlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptPlpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptPlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
