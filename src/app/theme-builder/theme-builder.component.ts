import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { PaletteService } from '../services/palette.service';
import {ThemeService} from '../services/theme.service';

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
    private paletteService: PaletteService,
    private themeService: ThemeService,
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      primary: ['#3f51b5', [Validators.required]],
      accent: ['#ff4081', [Validators.required]],
      warn: ['#f44336', [Validators.required]],
    });

    this.form.valueChanges.pipe(
      startWith(this.form.value),
      map((value) => ({
        primary: this.paletteService.generatePalette(value.primary),
        accent: this.paletteService.generatePalette(value.accent),
        warn: this.paletteService.generatePalette(value.warn),
      })),
      takeUntil(this.destroyed),
    ).subscribe((theme) => this.themeService.setTheme(theme));
  }

  ngOnDestroy() {
    this.destroyed.next();
  }
}
