import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalatComponent } from './dalat.component';

describe('DalatComponent', () => {
  let component: DalatComponent;
  let fixture: ComponentFixture<DalatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
