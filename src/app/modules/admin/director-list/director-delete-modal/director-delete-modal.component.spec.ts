import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorDeleteModalComponent } from './director-delete-modal.component';

describe('DirectorDeleteModalComponent', () => {
  let component: DirectorDeleteModalComponent;
  let fixture: ComponentFixture<DirectorDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
