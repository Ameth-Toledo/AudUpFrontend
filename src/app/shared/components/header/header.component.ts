import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  
  showNotifications = false;
  
  notifications = [
    {
      id: 1,
      title: 'Nueva clase disponible',
      message: 'Se ha publicado la Clase 3 - Encapsulamiento',
      time: 'Hace 5 min',
      read: false,
      icon: 'bx-book-open',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Nuevo anuncio',
      message: 'Ali López ha publicado un nuevo anuncio',
      time: 'Hace 1 hora',
      read: false,
      icon: 'bx-bell',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Material subido',
      message: 'Nuevo PDF disponible en POO',
      time: 'Hace 2 horas',
      read: true,
      icon: 'bx-file',
      color: 'green'
    }
  ];

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  closeNotifications() {
    this.showNotifications = false;
  }

  markAsRead(notificationId: number) {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.read = true;
    }
  }

  markAllAsRead() {
    this.notifications.forEach(n => n.read = true);
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }
}