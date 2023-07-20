import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ColorsComponent, ThemeColorComponent } from 'app/views/theme/colors.component';
import { TypographyComponent } from 'app/views/theme/typography.component';

// Theme Routing
import { ThemeRoutingModule } from 'app/views/theme/theme-routing.module';

@NgModule({
  imports: [CommonModule, ThemeRoutingModule, CardModule, GridModule, UtilitiesModule, IconModule, NavModule, TabsModule],
  declarations: [ColorsComponent, ThemeColorComponent, TypographyComponent],
})
export class ThemeModule {}
