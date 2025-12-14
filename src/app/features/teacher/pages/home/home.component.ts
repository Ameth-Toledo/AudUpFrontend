import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCardComponent } from "../../../../shared/components/subject-card/subject-card.component";
import { CreateSubjectModalComponent } from "../../components/create-subject-modal/create-subject-modal.component";
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SubjectCardComponent, CreateSubjectModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  subjects: any[] = [];
  isLoading: boolean = true;
  showCreateModal: boolean = false;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.isLoading = true;
    this.subjectService.getTeacherSubjects().subscribe({
      next: (response) => {
        this.subjects = response.data.map((subject: Subject) => ({
          subject_id: subject.subject_id,
          subject_name: subject.subject_name,
          description: subject.description,
          teacher_name: subject.teacher_name,
          image_teacher: 'assets/avatar.png',
          grade_level: subject.grade_level,
          school_year: subject.school_year,
          is_active: subject.is_active
        }));
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar asignaturas:', error);
        this.subjects = [];
        this.isLoading = false;
      }
    });
  }

  openCreateModal() {
    this.showCreateModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false;
  }

  onSubjectCreated() {
    this.closeCreateModal();
    this.loadSubjects();
  }

  editSubject(subjectId: number) {
    console.log('Editar asignatura:', subjectId);
  }

  deleteSubject(subjectId: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta asignatura?')) {
      this.subjectService.deleteSubject(subjectId).subscribe({
        next: () => {
          this.loadSubjects();
        },
        error: (error) => {
          console.error('Error al eliminar asignatura:', error);
          alert('Error al eliminar la asignatura');
        }
      });
    }
  }
}