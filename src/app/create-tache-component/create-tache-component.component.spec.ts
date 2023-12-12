import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTacheComponentComponent } from './create-tache-component.component';

describe('CreateTacheComponentComponent', () => {
  let component: CreateTacheComponentComponent;
  let fixture: ComponentFixture<CreateTacheComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTacheComponentComponent]
    });
    fixture = TestBed.createComponent(CreateTacheComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
