import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittersPlpComponent } from './sitters-plp.component';

describe('SittersPlpComponent', () => {
  let component: SittersPlpComponent;
  let fixture: ComponentFixture<SittersPlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SittersPlpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SittersPlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
