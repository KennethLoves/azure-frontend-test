import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from 'app/views/charts/charts.component';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
    data: {
      title: 'Charts',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
