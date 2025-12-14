import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { RegisterRequest, RegisterResponse } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/api/users`;

  constructor(private http: HttpClient) { }

  register(data: RegisterRequest): Observable<RegisterResponse> {
    const formData = new FormData();
    
    formData.append('firstName', data.firstName);
    formData.append('middleName', data.middleName);
    formData.append('lastName', data.lastName);
    formData.append('secondLastName', data.secondLastName);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('roleId', data.roleId.toString());
    formData.append('phone', data.phone);
    
    if (data.profileImage) {
      formData.append('profileImage', data.profileImage);
    }

    return this.http.post<RegisterResponse>(this.apiUrl, formData);
  }
}