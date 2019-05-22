import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeBuilderComponent } from './theme-builder.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

describe('ThemeBuilderComponent', () => {

  let component: ThemeBuilderComponent;
  let fixture: ComponentFixture<ThemeBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
      ],
      declarations: [ ThemeBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
