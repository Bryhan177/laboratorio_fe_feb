import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app/layout/component/app.layout'),
        children: [
            { path: '', loadComponent: () => import('./app/dashboard/dashboard')},
            { path: 'apps', loadChildren: () => import('./app/apps/apps.routes') },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', loadComponent: () => import('./app/documentation/documentation.component') },
            { path: 'empty', loadComponent: () => import('./app/empty/empty.component') },
        ]
    },
    { path: '',
        children: [
            { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes')},
            { path: 'landing', loadComponent: () => import('./app/pages/landing/landing')},
            { path: 'notfound', loadComponent: () => import('./app/pages/notfound/notfound.component')},
        ]
    },
    { path: '**', redirectTo: '/notfound' }
];
