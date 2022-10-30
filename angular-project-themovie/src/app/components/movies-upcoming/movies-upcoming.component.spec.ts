import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesUpcomingComponent } from './movies-upcoming.component';

describe('MoviesUpcomingComponent', () => {
  let component: MoviesUpcomingComponent;
  let fixture: ComponentFixture<MoviesUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
