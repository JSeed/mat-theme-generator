import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../model/theme';

@Component({
  selector: 'mtb-theme-output',
  templateUrl: './theme-output.component.html',
  styleUrls: ['./theme-output.component.scss']
})
export class ThemeOutputComponent implements OnInit {

  @Input()
  theme: Theme;

  constructor() { }

  ngOnInit() {
  }

}
