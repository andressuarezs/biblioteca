import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudentTableComponent } from './estudent-table.component';

describe('EstudentTableComponent', () => {
  let component: EstudentTableComponent;
  let fixture: ComponentFixture<EstudentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
