import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesUpcomingListComponent } from './movies-upcoming-list.component';

describe('MoviesUpcomingListComponent', () => {
  let component: MoviesUpcomingListComponent;
  let fixture: ComponentFixture<MoviesUpcomingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesUpcomingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesUpcomingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
