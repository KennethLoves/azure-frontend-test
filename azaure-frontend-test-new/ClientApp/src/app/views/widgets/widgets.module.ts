import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonModule,
  CardModule,
  DropdownModule,
  GridModule,
  ProgressModule,
  SharedModule,
  WidgetModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { DocsComponentsModule } from 'components';

import { WidgetsRoutingModule } from 'app/views/widgets/widgets-routing.module';
import { WidgetsComponent } from 'app/views/widgets/widgets/widgets.component';
import { WidgetsBrandComponent } from 'app/views/widgets/widgets-brand/widgets-brand.component';
import { ChartSampleComponent, WidgetsDropdownComponent } from 'app/views/widgets/widgets-dropdown/widgets-dropdown.component';
import { WidgetsEComponent } from 'app/views/widgets/widgets-e/widgets-e.component';

@NgModule({
  declarations: [WidgetsComponent, WidgetsBrandComponent, WidgetsDropdownComponent, ChartSampleComponent, WidgetsEComponent],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    GridModule,
    WidgetModule,
    IconModule,
    DropdownModule,
    SharedModule,
    ButtonModule,
    CardModule,
    DocsComponentsModule,
    ProgressModule,
    ChartjsModule,
  ],
  exports: [WidgetsBrandComponent, WidgetsDropdownComponent],
})
export class WidgetsModule {}
