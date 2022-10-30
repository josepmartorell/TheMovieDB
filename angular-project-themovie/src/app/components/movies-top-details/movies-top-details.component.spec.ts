import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTopDetailsComponent } from './movies-top-details.component';

describe('MoviesTopDetailsComponent', () => {
  let component: MoviesTopDetailsComponent;
  let fixture: ComponentFixture<MoviesTopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesTopDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesTopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
