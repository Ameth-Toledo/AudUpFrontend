import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SubjectsResponse, CreateSubjectRequest, UpdateSubjectRequest } from '../models/subject.model';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl = `${environment.apiUrl}/api/subjects`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getTeacherSubjects(): Observable<SubjectsResponse> {
    const user = this.authService.getUser();
    const teacherId = user?.userId;
    
    return this.http.get<SubjectsResponse>(`${this.apiUrl}/teacher/${teacherId}`);
  }

  createSubject(data: CreateSubjectRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updateSubject(subjectId: number, data: UpdateSubjectRequest): Observable<any> {
    return this.http.put(`${this.apiUrl}/${subjectId}`, data);
  }

  deleteSubject(subjectId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${subjectId}`);
  }
}