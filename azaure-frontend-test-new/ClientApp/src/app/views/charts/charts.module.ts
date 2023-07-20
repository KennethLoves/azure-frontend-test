import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule, CardModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { ChartsComponent } from 'app/views/charts/charts.component';
import { ChartsRoutingModule } from 'app/views/charts/charts-routing.module';
import { DocsComponentsModule } from 'components';

@NgModule({
  declarations: [ChartsComponent],
  imports: [CommonModule, ChartsRoutingModule, ChartjsModule, CardModule, GridModule, BadgeModule, DocsComponentsModule],
})
export class ChartsModule {}
