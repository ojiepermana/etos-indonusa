import { Routes } from '@angular/router';
import { SalesComponent } from './sales.component';
import { SalesDashboardComponent } from './dashboard/dashboard.component';

export const SALES_ROUTES: Routes = [
    {
        path     : '',
        component: SalesComponent,
        children : [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path      : 'dashboard',
                component : SalesDashboardComponent
            },
            {
                path      : 'sales',
                loadChildren: () => import('app/pages/sales/route')
            }
        ]
    },
];
