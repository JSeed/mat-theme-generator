import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeOutputComponent } from './theme-output.component';

describe('ThemeOutputComponent', () => {
  let component: ThemeOutputComponent;
  let fixture: ComponentFixture<ThemeOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
