import { NgModule } from '@angular/core';
import { BaoAlertModule } from './alert/module';
import { BaoBadgeModule } from './badge/module';
import { BaoButtonModule } from './button/module';
import { BaoCardModule } from './card/module';
import { BaoHeaderInfoModule } from './header-info/module';
import { BaoIconModule } from './icon';
import { BaoSnackBarModule } from './snack-bar/module';

@NgModule({
  imports: [
    BaoIconModule,
    BaoButtonModule,
    BaoAlertModule,
    BaoBadgeModule,
    BaoSnackBarModule,
    BaoCardModule,
    BaoHeaderInfoModule
  ],
  exports: [
    BaoIconModule,
    BaoButtonModule,
    BaoAlertModule
    // TODO: reactivate once component does not depend on global css BaoAlertModule,
    // TODO: reactivate once component does not depend on global css BaoBadgeModule,
    // TODO: reactivate once component does not depend on global css BaoSnackBarModule,
    // TODO: reactivate once component does not depend on global css BaoCardModule,
    // TODO: reactivate once component does not depend on global css BaoHeaderInfoModule
  ]
})
export class BaoModule {}
