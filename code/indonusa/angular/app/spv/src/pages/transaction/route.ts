import { Routes } from '@angular/router';
import { TransactionPageComponent } from './transaction.component';
import { TransactionDashboardComponent } from './dashboard.component';

export const TRANSACTION_PAGES_ROUTES: Routes = [
    {
        path     : '',
        component: TransactionPageComponent,
        children : [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path      : 'dashboard',
                component : TransactionDashboardComponent
            }
        ]
    },
];
