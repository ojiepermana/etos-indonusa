import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from 'environments/environment';
import { DashboardComponent } from 'pages/dashboard.component';
// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

    // Redirect signed-in user to the '/example'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'dashboard' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: 'sign-in',
                loadChildren: () => 
                  loadRemoteModule({
                    type: 'module',
                    remoteEntry: environment.authMfeRemoteEntry,
                    exposedModule: './sign-in'})
                    .then(m => m.SIGN_IN_MFE_ROUTES)
            },
            
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () => 
                  loadRemoteModule({
                    type: 'module',
                    remoteEntry: environment.authMfeRemoteEntry,
                    exposedModule: './sign-out'})
                    .then(m => m.SIGN_OUT_MFE_ROUTES)
            },
        ]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'sales',
                loadChildren: () => 
                  loadRemoteModule({
                    type: 'module',
                    remoteEntry: environment.salesMfeRemoteEntry,
                    exposedModule: './routes'})
                    .then(m => m.SALES_APP_ROUTES)
            },
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/'
      },
];
