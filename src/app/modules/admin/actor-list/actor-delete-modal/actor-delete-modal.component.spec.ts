import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDeleteModalComponent } from './actor-delete-modal.component';

describe('ActorDeleteModalComponent', () => {
  let component: ActorDeleteModalComponent;
  let fixture: ComponentFixture<ActorDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
