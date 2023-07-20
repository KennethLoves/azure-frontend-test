import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DocsComponentsModule } from 'components';
import { ButtonsComponent } from 'app/views/buttons/buttons/buttons.component';
import { ButtonGroupsComponent } from 'app/views/buttons/button-groups/button-groups.component';
import { DropdownsComponent } from 'app/views/buttons/dropdowns/dropdowns.component';

import { ButtonsRoutingModule } from 'app/views/buttons/buttons-routing.module';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  NavbarModule,
  NavModule,
  SharedModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [ButtonsComponent, ButtonGroupsComponent, DropdownsComponent],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    ButtonModule,
    ButtonGroupModule,
    GridModule,
    IconModule,
    CardModule,
    UtilitiesModule,
    DropdownModule,
    SharedModule,
    FormModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    NavbarModule,
    CollapseModule,
    NavModule,
    NavbarModule,
  ],
})
export class ButtonsModule {}
