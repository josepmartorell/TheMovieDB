import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTopDetailsComponent } from './tv-top-details.component';

describe('TvTopDetailsComponent', () => {
  let component: TvTopDetailsComponent;
  let fixture: ComponentFixture<TvTopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvTopDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvTopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
