import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTopListComponent } from './movies-top-list.component';

describe('MoviesTopListComponent', () => {
  let component: MoviesTopListComponent;
  let fixture: ComponentFixture<MoviesTopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesTopListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
