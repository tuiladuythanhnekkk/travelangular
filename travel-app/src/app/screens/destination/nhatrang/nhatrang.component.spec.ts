import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhatrangComponent } from './nhatrang.component';

describe('NhatrangComponent', () => {
  let component: NhatrangComponent;
  let fixture: ComponentFixture<NhatrangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhatrangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhatrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
