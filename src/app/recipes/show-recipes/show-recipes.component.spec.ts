import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecipesComponent } from './show-recipes.component';

describe('ShowRecipesComponent', () => {
  let component: ShowRecipesComponent;
  let fixture: ComponentFixture<ShowRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
