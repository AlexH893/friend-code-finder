import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutDialogComponent } from './tut-dialog.component';

describe('TutDialogComponent', () => {
  let component: TutDialogComponent;
  let fixture: ComponentFixture<TutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
