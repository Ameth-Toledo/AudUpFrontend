import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AnnouncementCardComponent } from "../../../../shared/components/announcement-card/announcement-card.component";
import { ClassCardComponent } from "../../../../shared/components/class-card/class-card.component";

@Component({
  selector: 'app-asignatura-detail',
  standalone: true,
  imports: [CommonModule, AnnouncementCardComponent, ClassCardComponent],
  templateUrl: './asignatura-detail.component.html',
  styleUrl: './asignatura-detail.component.css'
})
export class AsignaturaDetailComponent implements OnInit {
  subjectName: string = '';
  subjectId: string = '';
  announcements: any[] = [];
  classes: any[] = [];
  activeTab: 'anuncios' | 'clases' = 'anuncios';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.subjectName = this.route.snapshot.paramMap.get('name') || '';
    this.subjectId = this.route.snapshot.paramMap.get('id') || '';

    const decodedName = decodeURIComponent(this.subjectName).replace(/-/g, ' ');
    this.titleService.setTitle(decodedName);

    // Datos de prueba
    this.announcements = [
      {
        id: 1,
        teacherName: 'Ali López Zúnun',
        teacherImage: 'assets/avatar.png',
        date: '2025-08-15',
        content: 'Hola chicos, bienvenidos a la clase de programación orientada a objetos.'
      }
    ];

    this.classes = [
      {
        id: 1,
        name: 'CLASE 1 - INTRODUCCIÓN A POO',
        status: 'Completada'
      },
      {
        id: 2,
        name: 'CLASE 2 - HERENCIA Y POLIMORFISMO',
        status: 'Actividad'
      }
    ];
  }

  decodeURIComponent(str: string): string {
    return decodeURIComponent(str).replace(/-/g, ' ').split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  viewClass(classId: number) {
    console.log('Ver clase:', classId);
  }

  setActiveTab(tab: 'anuncios' | 'clases') {
    this.activeTab = tab;
  }
}