import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorAddModalComponent } from './director-add-modal.component';

describe('DirectorAddModalComponent', () => {
  let component: DirectorAddModalComponent;
  let fixture: ComponentFixture<DirectorAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
