import { Injectable } from '@angular/core';
import { Theme } from '../model/theme';
import { Palette, PaletteType } from '../model/palette';
import { FaviconService } from './favicon.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  
  constructor(
    private favicon: FaviconService,
  ) {}
  
  setTheme(theme: Theme) {
    Object.keys(theme).forEach((key) => this.updatePalette(key as PaletteType, theme[key]));
    this.favicon.updateColor(theme.primary['500']);
  }

  private updatePalette(type: PaletteType, palette: Palette) {
    Object.keys(palette).forEach((key) => this.setCssVariable(`--gen-${type}-${key}`, palette[key]));
  }

  private setCssVariable(name: string, value: string) {
    document.body.style.setProperty(name, value);
  }
}

