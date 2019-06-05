import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorAddModalComponent } from './actor-add-modal.component';

describe('ActorAddModalComponent', () => {
  let component: ActorAddModalComponent;
  let fixture: ComponentFixture<ActorAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
