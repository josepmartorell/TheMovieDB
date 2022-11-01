import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvUpcomingDetailsComponent } from './tv-upcoming-details.component';

describe('TvUpcomingDetailsComponent', () => {
  let component: TvUpcomingDetailsComponent;
  let fixture: ComponentFixture<TvUpcomingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvUpcomingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvUpcomingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
