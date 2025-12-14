import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { EnrollmentsResponse } from '../models/enrollment.model';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = `${environment.apiUrl}/api/enrollments`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getStudentEnrollments(): Observable<EnrollmentsResponse> {
    const user = this.authService.getUser();
    const studentId = user?.userId;
    
    return this.http.get<EnrollmentsResponse>(`${this.apiUrl}/student/${studentId}`);
  }
}