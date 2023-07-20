import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgesComponent } from 'app/views/notifications/badges/badges.component';
import { AlertsComponent } from 'app/views/notifications/alerts/alerts.component';
import { ModalsComponent } from 'app/views/notifications/modals/modals.component';
import { ToastersComponent } from 'app/views/notifications/toasters/toasters.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Notifications',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'badges',
      },
      {
        path: 'alerts',
        component: AlertsComponent,
        data: {
          title: 'Alerts',
        },
      },
      {
        path: 'badges',
        component: BadgesComponent,
        data: {
          title: 'Badges',
        },
      },
      {
        path: 'modal',
        component: ModalsComponent,
        data: {
          title: 'Modal',
        },
      },
      {
        path: 'toasts',
        component: ToastersComponent,
        data: {
          title: 'Toasts',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsRoutingModule {}
