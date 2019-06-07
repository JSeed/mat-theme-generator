import { NgModule } from '@angular/core';
import { MatBadgeModule, MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class MaterialModule {}
