import { Injectable } from '@angular/core';
import { Theme } from '../model/theme';
import { Palette, PaletteType } from '../model/palette';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  setTheme(theme: Theme) {
    Object.keys(theme).forEach((key) => this.updatePalette(key as PaletteType, theme[key]));
  }

  private updatePalette(type: PaletteType, palette: Palette) {
    Object.keys(palette).forEach((key) => this.setCssVariable(`--gen-${type}-${key}`, palette[key]));
  }

  private setCssVariable(name: string, value: string) {
    document.body.style.setProperty(name, value);
  }
}
