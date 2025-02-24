import { Routes } from '@angular/router';

export default [
    { path: 'crud', loadComponent: () => import('./crud/crud.component') },
    { path: 'calendar', loadComponent: () => import('./calendar/calendar.component') }

] as Routes;
