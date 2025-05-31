import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShowcaseComponent } from './work-showcase.component';

describe('WorkShowcaseComponent', () => {
  let component: WorkShowcaseComponent;
  let fixture: ComponentFixture<WorkShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
