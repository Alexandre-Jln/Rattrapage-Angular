import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesComponentComponent } from './taches-component.component';

describe('TachesComponentComponent', () => {
  let component: TachesComponentComponent;
  let fixture: ComponentFixture<TachesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TachesComponentComponent]
    });
    fixture = TestBed.createComponent(TachesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
