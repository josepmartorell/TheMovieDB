import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTopComponent } from './tv-top.component';

describe('TvTopComponent', () => {
  let component: TvTopComponent;
  let fixture: ComponentFixture<TvTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
