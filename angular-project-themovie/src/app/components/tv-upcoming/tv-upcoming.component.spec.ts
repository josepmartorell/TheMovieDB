import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvUpcomingComponent } from './tv-upcoming.component';

describe('TvUpcomingComponent', () => {
  let component: TvUpcomingComponent;
  let fixture: ComponentFixture<TvUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
