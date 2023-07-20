import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { BrowserUtils } from '@azure/msal-browser';
import { FailedComponent } from 'app/views/pages/failed/failed.component';
import { DefaultLayoutComponent } from 'app/containers';
import { LoginComponent } from 'app/views/pages/login/login.component';
import { Page404Component } from 'app/views/pages/page404/page404.component';
import { Page500Component } from 'app/views/pages/page500/page500.component';
import { RegisterComponent } from 'app/views/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('app/views/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'kendo',
        loadChildren: () => import('app/views/kendo/kendo.module').then(m => m.KendoModule),
      },
      {
        path: 'theme',
        loadChildren: () => import('app/views/theme/theme.module').then(m => m.ThemeModule),
      },
      {
        path: 'base',
        loadChildren: () => import('app/views/base/base.module').then(m => m.BaseModule),
      },
      {
        path: 'buttons',
        loadChildren: () => import('app/views/buttons/buttons.module').then(m => m.ButtonsModule),
      },
      {
        path: 'forms',
        loadChildren: () => import('app/views/forms/forms.module').then(m => m.CoreUIFormsModule),
      },
      {
        path: 'charts',
        loadChildren: () => import('app/views/charts/charts.module').then(m => m.ChartsModule),
      },
      {
        path: 'icons',
        loadChildren: () => import('app/views/icons/icons.module').then(m => m.IconsModule),
      },
      {
        path: 'notifications',
        loadChildren: () => import('app/views/notifications/notifications.module').then(m => m.NotificationsModule),
      },
      {
        path: 'widgets',
        loadChildren: () => import('app/views/widgets/widgets.module').then(m => m.WidgetsModule),
      },
      {
        path: 'pages',
        loadChildren: () => import('app/views/pages/pages.module').then(m => m.PagesModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('app/views/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [MsalGuard],
      },
      {
        path: 'health',
        loadChildren: () => import('app/views/health/health.module').then(m => m.HealthModule),
        canActivate: [MsalGuard],
      },
    ],
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  {
    path: 'login-failed',
    component: FailedComponent,
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
