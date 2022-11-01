import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvLatestDetailsComponent } from './tv-latest-details.component';

describe('TvLatestDetailsComponent', () => {
  let component: TvLatestDetailsComponent;
  let fixture: ComponentFixture<TvLatestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvLatestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvLatestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
