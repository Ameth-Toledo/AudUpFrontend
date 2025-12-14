import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { NoticesResponse } from '../models/notice.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private apiUrl = `${environment.apiUrl}/api/notices`;

  constructor(private http: HttpClient) { }

  getNoticesBySubject(subjectId: number): Observable<NoticesResponse> {
    return this.http.get<NoticesResponse>(`${this.apiUrl}/subject/${subjectId}`);
  }
}