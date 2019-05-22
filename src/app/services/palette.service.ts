import { Injectable } from '@angular/core';
import { Palette } from '../model/palette';
import * as tinycolor from 'tinycolor2';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  generatePalette(colorHex: string): Palette {
    const color = tinycolor(colorHex);
    const light = tinycolor('#ffffff');
    const dark = tinycolor(this.multiply(colorHex, colorHex));

    return {
      50: tinycolor.mix(light, color, 12).toHexString(),
      100: tinycolor.mix(light, color, 30).toHexString(),
      200: tinycolor.mix(light, color, 50).toHexString(),
      300: tinycolor.mix(light, color, 70).toHexString(),
      400: tinycolor.mix(light, color, 85).toHexString(),
      500: tinycolor.mix(light, color, 100).toHexString(),
      600: tinycolor.mix(dark, color, 87).toHexString(),
      700: tinycolor.mix(dark, color, 70).toHexString(),
      800: tinycolor.mix(dark, color, 54).toHexString(),
      900: tinycolor.mix(dark, color, 25).toHexString(),
      A100: tinycolor.mix(dark, color, 85).saturate(80).lighten(45.6).toHexString(),
      A200: tinycolor.mix(dark, color, 85).saturate(80).lighten(35.6).toHexString(),
      A400: tinycolor.mix(dark, color, 85).saturate(100).lighten(25.6).toHexString(),
      A700: tinycolor.mix(dark, color, 85).saturate(100).lighten(20.5).toHexString(),
    };

  }

  multiply(aHex: string, bHex: string): string {
    const doMultiply = (c, d) => Math.floor(c * d / 255);
    const a = tinycolor(aHex).toRgb();
    const b = tinycolor(bHex).toRgb();

    return tinycolor({
      r: doMultiply(a.r, b.r),
      g: doMultiply(a.g, b.g),
      b: doMultiply(a.b, b.b),
    }).toHexString();

  }
}

