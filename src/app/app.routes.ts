import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES) },
    { path: 'dashboard', loadChildren: () => import('./features/student/student.routes').then(m => m.STUDENT_ROUTES) },
    //{ path: 'dashboard', canActivate: [authGuard], loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '/auth/login' }
];
