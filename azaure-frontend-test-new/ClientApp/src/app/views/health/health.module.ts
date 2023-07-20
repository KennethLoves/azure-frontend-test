import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthRoutingModule } from 'app/views/health/health-routing.module';
import { HealthComponent } from 'app/views/health/health.component';

@NgModule({
  imports: [HealthRoutingModule, CommonModule],
  declarations: [HealthComponent],
})
export class HealthModule {}
