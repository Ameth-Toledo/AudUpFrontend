import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { JoinAsignaturaRequest, JoinAsignaturaResponse } from '../models/join-asignature';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JoinAsignaturaService {
  private apiUrl = `${environment.apiUrl}/api/students`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  joinByCode(code: string): Observable<JoinAsignaturaResponse> {
    const user = this.authService.getUser();
    const studentId = user?.userId;
    
    const data: JoinAsignaturaRequest = { class_code: code.trim() };
    return this.http.post<JoinAsignaturaResponse>(`${this.apiUrl}/${studentId}/join-class`, data);
  }
}