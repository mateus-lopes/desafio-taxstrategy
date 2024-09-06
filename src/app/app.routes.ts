import { Routes } from '@angular/router';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MyServicesComponent } from './views/my-services/my-services.component';
import { ServicesAddComponent } from './views/services-add/services-add.component';
import { ServicesPanelComponent } from './views/services-panel/services-panel.component';
import { ServicesReportsComponent } from './views/services-reports/services-reports.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ServicesEditComponent } from './views/services-edit/services-edit.component';
import { ServiceReportComponent } from './views/service-report/service-report.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'my-services',
        component: MyServicesComponent
    },
    {
        path: 'services',
        component: ServicesPanelComponent
    },
    {
        path: 'services/edit/:id',
        component: ServicesEditComponent
    },
    {
        path: 'services/add',
        component: ServicesAddComponent
    },
    {
        path: 'services/reports',
        component: ServicesReportsComponent
    },
    {
        path: 'services/report/:id',
        component: ServiceReportComponent,
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/not-found'
    },
];
