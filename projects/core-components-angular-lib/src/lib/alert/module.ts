import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BaoButtontModule } from '../button/module';
import { BaoIconModule } from '../icon';
import { BaoAlertActions, BaoAlertComponent, BaoAlertContent, BaoAlertLink, BaoAlertTitle } from './alert.component';

const ALERT_DIRECTIVES = [BaoAlertTitle, BaoAlertContent, BaoAlertActions, BaoAlertLink, BaoAlertComponent];

@NgModule({
  imports: [CommonModule, BaoIconModule, BaoButtontModule],
  declarations: [ALERT_DIRECTIVES],
  exports: [ALERT_DIRECTIVES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaoAlertModule {}
