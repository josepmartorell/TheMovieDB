import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTopComponent } from './movies-top.component';

describe('MoviesTopComponent', () => {
  let component: MoviesTopComponent;
  let fixture: ComponentFixture<MoviesTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
