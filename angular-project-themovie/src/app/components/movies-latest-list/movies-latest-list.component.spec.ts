import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesLatestListComponent } from './movies-latest-list.component';

describe('MoviesLatestListComponent', () => {
  let component: MoviesLatestListComponent;
  let fixture: ComponentFixture<MoviesLatestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesLatestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesLatestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
