import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SwitchModule } from '@progress/kendo-angular-inputs';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { TextAreaModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import {
  FormFieldModule,
  CheckBoxModule,
  RadioButtonModule,
  NumericTextBoxModule,
  MaskedTextBoxModule,
} from '@progress/kendo-angular-inputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

// CoreUI Modules
import { CardModule, FormModule, GridModule as CoreUIGridModule } from '@coreui/angular';

import { KendoRoutingModule } from 'app/views/kendo/kendo-routing.module';
import { InputControlsComponent } from 'app/views/kendo/input-controls/input-controls.component';
import { AdvancedControlsComponent } from 'app/views/kendo/advanced-controls/advanced-controls.component';

@NgModule({
  declarations: [InputControlsComponent, AdvancedControlsComponent],
  imports: [
    CommonModule,
    KendoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CardModule,
    CoreUIGridModule,
    FormModule,
    ReactiveFormsModule,

    // Kendo
    DropDownsModule,
    SwitchModule,
    TextBoxModule,
    TextAreaModule,
    LabelModule,
    FormFieldModule,
    CheckBoxModule,
    RadioButtonModule,
    NumericTextBoxModule,
    MaskedTextBoxModule,
    ButtonModule,
    GridModule,
  ],
})
export class KendoModule {}
