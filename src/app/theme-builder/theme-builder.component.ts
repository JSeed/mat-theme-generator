import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mtb-theme-builder',
  templateUrl: './theme-builder.component.html',
  styleUrls: ['./theme-builder.component.scss']
})
export class ThemeBuilderComponent implements OnInit, OnDestroy {

  form: FormGroup;

  private destroyed = new Subject<void>();

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      primary: ['#3f51b5', [Validators.required]],
      accent: ['#ff4081', [Validators.required]],
      warn: ['#f44336', [Validators.required]],
    });

    this.form.valueChanges.pipe(
      startWith(this.form.value),
      takeUntil(this.destroyed),
    ).subscribe(() => {
      console.log('Theme:', this.form.value);
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
  }
}
