import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from 'app/views/pages/pages-routing.module';
import { LoginComponent } from 'app/views/pages/login/login.component';
import { RegisterComponent } from 'app/views/pages/register/register.component';
import { Page404Component } from 'app/views/pages/page404/page404.component';
import { Page500Component } from 'app/views/pages/page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, Page404Component, Page500Component],
  imports: [CommonModule, PagesRoutingModule, CardModule, ButtonModule, GridModule, IconModule, FormModule],
})
export class PagesModule {}
