import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvUpcomingListComponent } from './tv-upcoming-list.component';

describe('TvUpcomingListComponent', () => {
  let component: TvUpcomingListComponent;
  let fixture: ComponentFixture<TvUpcomingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvUpcomingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvUpcomingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
