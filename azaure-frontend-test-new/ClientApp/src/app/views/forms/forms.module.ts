import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule,
} from '@coreui/angular';

import { DocsComponentsModule } from 'components';

import { FormsRoutingModule } from 'app/views/forms/forms-routing.module';
import { RangesComponent } from 'app/views/forms/ranges/ranges.component';
import { FloatingLabelsComponent } from 'app/views/forms/floating-labels/floating-labels.component';
import { FormControlsComponent } from 'app/views/forms/form-controls/form-controls.component';
import { SelectComponent } from 'app/views/forms/select/select.component';
import { ChecksRadiosComponent } from 'app/views/forms/checks-radios/checks-radios.component';
import { InputGroupsComponent } from 'app/views/forms/input-groups/input-groups.component';
import { LayoutComponent } from 'app/views/forms/layout/layout.component';
import { ValidationComponent } from 'app/views/forms/validation/validation.component';

@NgModule({
  declarations: [
    RangesComponent,
    FloatingLabelsComponent,
    FormControlsComponent,
    SelectComponent,
    ChecksRadiosComponent,
    InputGroupsComponent,
    LayoutComponent,
    ValidationComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
  ],
})
export class CoreUIFormsModule {}
