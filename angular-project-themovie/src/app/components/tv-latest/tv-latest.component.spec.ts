import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvLatestComponent } from './tv-latest.component';

describe('TvLatestComponent', () => {
  let component: TvLatestComponent;
  let fixture: ComponentFixture<TvLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvLatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
