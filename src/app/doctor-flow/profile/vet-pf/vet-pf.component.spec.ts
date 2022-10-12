import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetPfComponent } from './vet-pf.component';

describe('VetPfComponent', () => {
  let component: VetPfComponent;
  let fixture: ComponentFixture<VetPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetPfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
