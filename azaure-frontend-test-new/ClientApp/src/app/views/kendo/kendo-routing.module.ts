import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputControlsComponent } from 'app/views/kendo/input-controls/input-controls.component';
import { AdvancedControlsComponent } from 'app/views/kendo/advanced-controls/advanced-controls.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Kendo',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inputcontrols',
      },
      {
        path: 'inputcontrols',
        component: InputControlsComponent,
        data: {
          title: 'Input Controls',
        },
      },
      {
        path: 'advancedcontrols',
        component: AdvancedControlsComponent,
        data: {
          title: 'Advanced Controls',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KendoRoutingModule {}
