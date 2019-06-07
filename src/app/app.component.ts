import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import WebFont from 'webfontloader';

@Component({
  selector: 'mtb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  font: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.style.setProperty('--gen-font-family', `'Roboto'`);
  }

  setFont() {
    console.log(this.font);
    WebFont.load({
      fontactive: (fa) => console.log('fa', fa),
      google: {
        families: [this.font]
      }
  });

  this.document.body.style.setProperty('--gen-font-family', `'${this.font}'`);
  }

  fontString() {
    return `"${this.font}"`;
  }
}
