import { Component, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() closeSidebar = new EventEmitter<void>();

  menuItems = [
    { icon: 'bx-home', label: 'Inicio', route: '/dashboard/student' },
    { icon: 'bx-bell', label: 'Anuncios', route: '/dashboard/anuncios' },
    { icon: 'bx-user', label: 'Alumnos', route: '/dashboard/alumnos' },
    { icon: 'bx-file-blank', label: 'Transcripciones', route: '/dashboard/transcripciones' },
    { icon: 'bx-folder', label: 'Materiales', route: '/dashboard/materiales' },
    { icon: 'bx-cog', label: 'Configuración', route: '/dashboard/configuracion' }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  close() {
    this.closeSidebar.emit();
  }
}
