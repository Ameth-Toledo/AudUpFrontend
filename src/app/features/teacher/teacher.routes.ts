import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const TEACHER_ROUTES: Routes = [
    {
        path: '', 
        component: DashboardComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
                title: 'Inicio - Docente'
            }
        ]
    }
]

/*
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'student',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
                title: 'Inicio - Estudiante'
            },
            {
                path: 'anuncios',
                loadComponent: () => import('./pages/anuncios/anuncios.component').then(m => m.AnunciosComponent),
                title: 'Anuncios'
            },
            {
                path: 'transcripciones',
                loadComponent: () => import('./pages/transcripciones/transcripciones.component').then(m => m.TranscripcionesComponent),
                title: 'Transcripciones'
            },
            {
                path: 'materiales',
                loadComponent: () => import('./pages/materiales/materiales.component').then(m => m.MaterialesComponent),
                title: 'Materiales'
            },
            {
                path: 'configuracion',
                loadComponent: () => import('./pages/configuracion/configuracion.component').then(m => m.ConfiguracionComponent),
                title: 'Configuración'
            },
            {
                path: 'asignatura/:name/:id',
                loadComponent: () => import('./pages/asignatura-detail/asignatura-detail.component').then(m => m.AsignaturaDetailComponent),
                title: 'Detalle de Asignatura'
            },
            {
                path: 'clase/:name/:id',
                loadComponent: () => import('./pages/class-detail/class-detail.component').then(m => m.ClassDetailComponent),
                title: 'Clase'
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    }
];
*/