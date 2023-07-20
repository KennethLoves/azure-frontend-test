import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  ToastModule,
  TooltipModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

import { DocsComponentsModule } from 'components';
import { NotificationsRoutingModule } from 'app/views/notifications/notifications-routing.module';

import { AlertsComponent } from 'app/views/notifications/alerts/alerts.component';
import { BadgesComponent } from 'app/views/notifications/badges/badges.component';
import { ModalsComponent } from 'app/views/notifications/modals/modals.component';
// import { ToastsComponent } from 'app/views/notifications/toasts/toasts.component';
import { ToastersComponent } from 'app/views/notifications/toasters/toasters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppToastComponent } from 'app/views/notifications/toasters/toast-simple/toast.component';

@NgModule({
  declarations: [
    BadgesComponent,
    AlertsComponent,
    ModalsComponent,
    // ToastsComponent,
    ToastersComponent,
    AppToastComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotificationsRoutingModule,
    DocsComponentsModule,
    AlertModule,
    GridModule,
    CardModule,
    BadgeModule,
    ButtonModule,
    FormModule,
    ModalModule,
    ToastModule,
    SharedModule,
    UtilitiesModule,
    TooltipModule,
    PopoverModule,
    ProgressModule,
    IconModule,
  ],
})
export class NotificationsModule {}
