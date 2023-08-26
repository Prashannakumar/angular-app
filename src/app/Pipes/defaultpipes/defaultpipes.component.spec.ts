import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultpipesComponent } from './defaultpipes.component';

describe('DefaultpipesComponent', () => {
  let component: DefaultpipesComponent;
  let fixture: ComponentFixture<DefaultpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultpipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
