import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { AnnouncementCardComponent } from "../../../../shared/components/announcement-card/announcement-card.component";
import { ClassCardComponent } from "../../../../shared/components/class-card/class-card.component";
import { NoticeService } from '../../services/notice.service';
import { SessionService } from '../../services/session.service';
import { Notice } from '../../models/notice.model';
import { Session } from '../../models/session.model';

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
  subjectDescription: string = '';
  announcements: any[] = [];
  classes: any[] = [];
  activeTab: 'anuncios' | 'clases' = 'anuncios';
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private noticeService: NoticeService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.subjectName = this.route.snapshot.paramMap.get('name') || '';
    this.subjectId = this.route.snapshot.paramMap.get('id') || '';

    const decodedName = decodeURIComponent(this.subjectName).replace(/-/g, ' ');
    this.titleService.setTitle(decodedName);
    this.subjectDescription = `Curso completo de ${decodedName.toLowerCase()}`;

    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    const subjectIdNum = parseInt(this.subjectId);

    forkJoin({
      notices: this.noticeService.getNoticesBySubject(subjectIdNum),
      sessions: this.sessionService.getSessionsBySubject(subjectIdNum)
    }).subscribe({
      next: ({ notices, sessions }) => {
        if (notices.data.length > 0) {
          this.subjectDescription = `Curso completo de ${notices.data[0].subject_name.toLowerCase()}`;
          
          this.announcements = [
            {
              id: 0,
              teacherName: notices.data[0].teacher_name,
              teacherImage: 'assets/avatar.png',
              date: new Date().toISOString().split('T')[0],
              content: `Hola chicos, bienvenidos a la clase de ${notices.data[0].subject_name}.`
            },
            ...notices.data.map((notice: Notice) => ({
              id: notice.notice_id,
              teacherName: notice.teacher_name,
              teacherImage: 'assets/avatar.png',
              date: notice.created_at.split('T')[0],
              content: notice.content
            }))
          ];
        } else if (sessions.data.length > 0) {
          this.subjectDescription = `Curso completo de ${sessions.data[0].subject_name.toLowerCase()}`;
        }

        this.classes = sessions.data.map((session: Session) => ({
          id: session.session_id,
          name: session.title.toUpperCase(),
          status: this.getStatusText(session.status)
        }));

        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar datos:', error);
        this.announcements = [];
        this.classes = [];
        this.isLoading = false;
      }
    });
  }

  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      'scheduled': 'Programada',
      'in_progress': 'En Progreso',
      'completed': 'Completada',
      'cancelled': 'Cancelada'
    };
    return statusMap[status] || status;
  }

  decodeURIComponent(str: string): string {
    return decodeURIComponent(str).replace(/-/g, ' ').split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  viewClass(classId: string | number) {
    this.router.navigate(['dashboard/class', classId]);
  }

  setActiveTab(tab: 'anuncios' | 'clases') {
    this.activeTab = tab;
  }
}