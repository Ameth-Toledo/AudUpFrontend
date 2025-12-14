import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubjectService } from '../../services/subject.service';
import { CreateSubjectRequest } from '../../models/subject.model';

@Component({
  selector: 'app-create-subject-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-subject-modal.component.html',
  styleUrl: './create-subject-modal.component.css'
})
export class CreateSubjectModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() created = new EventEmitter<void>();

  subjectForm: FormGroup;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService
  ) {
    this.subjectForm = this.fb.group({
      subject_name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      grade_level: ['', [Validators.required]],
      school_year: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{4}$/)]]
    });
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (this.subjectForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const data: CreateSubjectRequest = this.subjectForm.value;

      this.subjectService.createSubject(data).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.created.emit();
          this.onClose();
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Error al crear la asignatura. Intenta nuevamente.';
        }
      });
    } else {
      Object.keys(this.subjectForm.controls).forEach(key => {
        const control = this.subjectForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}