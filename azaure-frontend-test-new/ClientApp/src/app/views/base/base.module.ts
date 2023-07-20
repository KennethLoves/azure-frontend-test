import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// CoreUI Modules
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

// utils
import { DocsComponentsModule } from 'components';

// views
import { AccordionsComponent } from 'app/views/base/accordion/accordions.component';
import { BreadcrumbsComponent } from 'app/views/base/breadcrumbs/breadcrumbs.component';
import { CardsComponent } from 'app/views/base/cards/cards.component';
import { CarouselsComponent } from 'app/views/base/carousels/carousels.component';
import { CollapsesComponent } from 'app/views/base/collapses/collapses.component';
import { ListGroupsComponent } from 'app/views/base/list-groups/list-groups.component';
import { NavsComponent } from 'app/views/base/navs/navs.component';
import { PaginationsComponent } from 'app/views/base/paginations/paginations.component';
import { PlaceholdersComponent } from 'app/views/base/placeholders/placeholders.component';
import { PopoversComponent } from 'app/views/base/popovers/popovers.component';
import { ProgressComponent } from 'app/views/base/progress/progress.component';
import { SpinnersComponent } from 'app/views/base/spinners/spinners.component';
import { TablesComponent } from 'app/views/base/tables/tables.component';
import { TooltipsComponent } from 'app/views/base/tooltips/tooltips.component';
import { TabsComponent } from 'app/views/base/tabs/tabs.component';

// Components Routing
import { BaseRoutingModule } from 'app/views/base/base-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    DocsComponentsModule,
  ],
  declarations: [
    AccordionsComponent,
    BreadcrumbsComponent,
    CardsComponent,
    CarouselsComponent,
    CollapsesComponent,
    ListGroupsComponent,
    NavsComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    SpinnersComponent,
    TablesComponent,
    TooltipsComponent,
    TabsComponent,
    PlaceholdersComponent,
  ],
})
export class BaseModule {}
