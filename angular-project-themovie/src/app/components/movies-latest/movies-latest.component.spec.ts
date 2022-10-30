import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesLatestComponent } from './movies-latest.component';

describe('MoviesLatestComponent', () => {
  let component: MoviesLatestComponent;
  let fixture: ComponentFixture<MoviesLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesLatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
