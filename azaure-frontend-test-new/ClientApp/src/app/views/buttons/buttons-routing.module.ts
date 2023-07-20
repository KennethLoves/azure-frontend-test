import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsComponent } from 'app/views/buttons/buttons/buttons.component';
import { ButtonGroupsComponent } from 'app/views/buttons/button-groups/button-groups.component';
import { DropdownsComponent } from 'app/views/buttons/dropdowns/dropdowns.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'buttons',
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons',
        },
      },
      {
        path: 'button-groups',
        component: ButtonGroupsComponent,
        data: {
          title: 'Button groups',
        },
      },
      {
        path: 'dropdowns',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsRoutingModule {}
