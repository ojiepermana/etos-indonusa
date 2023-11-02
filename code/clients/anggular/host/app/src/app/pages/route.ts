import { Routes } from '@angular/router';
import { SalesDashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page.component';

export const SALES_ROUTES: Routes = [
    {
        path     : '',
        component: PageComponent,
        children : [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path      : 'dashboard',
                component : SalesDashboardComponent
            }
        ]
    },
] ;
