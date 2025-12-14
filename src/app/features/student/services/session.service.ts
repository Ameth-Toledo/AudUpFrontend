import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SessionsResponse } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private apiUrl = `${environment.apiUrl}/sessions`;

  constructor(private http: HttpClient) { }

  getSessionsBySubject(subjectId: number): Observable<SessionsResponse> {
    return this.http.get<SessionsResponse>(`${this.apiUrl}/subject/${subjectId}`);
  }
}