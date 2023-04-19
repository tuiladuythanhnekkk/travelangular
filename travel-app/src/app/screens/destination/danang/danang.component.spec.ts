import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanangComponent } from './danang.component';

describe('DanangComponent', () => {
  let component: DanangComponent;
  let fixture: ComponentFixture<DanangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
