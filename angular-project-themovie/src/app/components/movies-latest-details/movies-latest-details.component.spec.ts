import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesLatestDetailsComponent } from './movies-latest-details.component';

describe('MoviesLatestDetailsComponent', () => {
  let component: MoviesLatestDetailsComponent;
  let fixture: ComponentFixture<MoviesLatestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesLatestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesLatestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
