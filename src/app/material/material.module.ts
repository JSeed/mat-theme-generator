import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class MaterialModule {}
