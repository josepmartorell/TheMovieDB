import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvLatestListComponent } from './tv-latest-list.component';

describe('TvLatestListComponent', () => {
  let component: TvLatestListComponent;
  let fixture: ComponentFixture<TvLatestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvLatestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvLatestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
