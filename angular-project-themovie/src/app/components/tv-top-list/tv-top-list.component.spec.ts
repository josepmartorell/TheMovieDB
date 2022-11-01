import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTopListComponent } from './tv-top-list.component';

describe('TvTopListComponent', () => {
  let component: TvTopListComponent;
  let fixture: ComponentFixture<TvTopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvTopListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
