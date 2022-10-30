import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesUpcomingDetailsComponent } from './movies-upcoming-details.component';

describe('MoviesUpcomingDetailsComponent', () => {
  let component: MoviesUpcomingDetailsComponent;
  let fixture: ComponentFixture<MoviesUpcomingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesUpcomingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesUpcomingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
