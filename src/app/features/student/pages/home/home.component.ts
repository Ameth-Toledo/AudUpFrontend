import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCardComponent } from "../../../../shared/components/subject-card/subject-card.component";
import { JoinClassComponent } from "../../components/join-class/join-class.component";
import { EnrollmentService } from '../../services/enrollment.service';
import { Enrollment } from '../../models/enrollment.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SubjectCardComponent, JoinClassComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  subjects: any[] = [];
  showJoinModal: boolean = false;
  isLoading: boolean = true;

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit() {
    this.loadEnrollments();
  }

  loadEnrollments() {
    this.isLoading = true;
    this.enrollmentService.getStudentEnrollments().subscribe({
      next: (response) => {
        this.subjects = response.data.map((enrollment: Enrollment) => ({
          subject_id: enrollment.subject_id,
          subject_name: enrollment.subject_name,
          description: `Inscrito desde ${new Date(enrollment.enrolled_at).toLocaleDateString()}`,
          teacher_name: 'Docente',
          image_teacher: 'assets/avatar.png',
          grade_level: '',
          school_year: '2024-2025',
          is_active: enrollment.status === 'active'
        }));
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar inscripciones:', error);
        this.subjects = [];
        this.isLoading = false;
      }
    });
  }

  openJoinModal() {
    this.showJoinModal = true;
  }

  closeJoinModal() {
    this.showJoinModal = false;
  }

  onClassJoined() {
    this.closeJoinModal();
    this.loadEnrollments();
  }
}