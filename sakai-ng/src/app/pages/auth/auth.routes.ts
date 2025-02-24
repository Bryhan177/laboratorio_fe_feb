import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccessComponent } from './access/access.component';
import { ErrorComponent } from './error/error.component';

export default [
    { path: 'access', component:  AccessComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'login', component: LoginComponent }
] as Routes;
