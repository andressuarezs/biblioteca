import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudentFormComponent } from './estudent-form.component';

describe('EstudentFormComponent', () => {
  let component: EstudentFormComponent;
  let fixture: ComponentFixture<EstudentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
