import { Routes } from '@angular/router';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MyServicesComponent } from './views/my-services/my-services.component';
import { ServicesAddComponent } from './views/services-add/services-add.component';
import { ServicesPanelComponent } from './views/services-panel/services-panel.component';
import { ServicesReportsComponent } from './views/services-reports/services-reports.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ServicesEditComponent } from './views/services-edit/services-edit.component';
import { ServiceReportComponent } from './views/service-report/service-report.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'my-services',
        component: MyServicesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'services',
        component: ServicesPanelComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'services/edit/:id',
        component: ServicesEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'services/add',
        component: ServicesAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'services/reports',
        component: ServicesReportsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'services/report/:id',
        component: ServiceReportComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '/not-found'
    },
];
