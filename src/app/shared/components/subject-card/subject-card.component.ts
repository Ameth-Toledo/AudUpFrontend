import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-card.component.html',
  styleUrl: './subject-card.component.css'
})
export class SubjectCardComponent {
  @Input() subjectId!: number;
  @Input() subjectName: string = '';
  @Input() description: string = '';
  @Input() teacherName: string = '';
  @Input() imageTeacher: string = 'assets/default-avatar.png';
  @Input() gradeLevel: string = '';
  @Input() schoolYear: string = '';
  @Input() isActive: boolean = true;
  @Input() isEditable: boolean = false;

  @Output() onEdit = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();

  constructor (private router: Router) {}

  editSubject() {
    this.onEdit.emit(this.subjectId);
  }

  deleteSubject() {
    this.onDelete.emit(this.subjectId);
  }

  goToDetail(event: Event) {
    event.preventDefault();
    const encodedName = encodeURIComponent(this.subjectName.replace(/\s+/g, '-').toLowerCase());
    this.router.navigate(['dashboard/asignatura', encodedName, this.subjectId]);
  }
}