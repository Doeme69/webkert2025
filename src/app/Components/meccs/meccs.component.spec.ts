import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeccsComponent } from './meccs.component';

describe('MeccsComponent', () => {
  let component: MeccsComponent;
  let fixture: ComponentFixture<MeccsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeccsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeccsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
