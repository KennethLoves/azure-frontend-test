import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HealthComponent } from 'app/views/health/health.component';

const routes: Routes = [
  {
    path: '',
    component: HealthComponent,
    data: {
      title: $localize`Health`,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthRoutingModule {}
