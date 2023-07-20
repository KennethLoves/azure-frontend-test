import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { CoreUIIconsComponent } from 'app/views/icons/coreui-icons.component';
import { IconsRoutingModule } from 'app/views/icons/icons-routing.module';
import { DocsComponentsModule } from 'components';

@NgModule({
  imports: [IconsRoutingModule, CardModule, GridModule, IconModule, CommonModule, DocsComponentsModule],
  declarations: [CoreUIIconsComponent],
})
export class IconsModule {}
