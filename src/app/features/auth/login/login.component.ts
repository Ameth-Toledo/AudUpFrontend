import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword = false;
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  sendToRegister(event: Event) {
    event.preventDefault();
    this.router.navigate(['auth/register']);
  }

  login(event: Event) {
    event.preventDefault();
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor ingresa tu correo y contraseña';
      return;
    }

    this.isLoading = true;

    const credentials: LoginRequest = {
      email: this.email,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.isLoading = false;
        
        if (response.data.roleId === 1) {
          this.router.navigate(['dashboard/student']);
        } else if (response.data.roleId === 2) {
          this.router.navigate(['dashboard/docente']);
        } else {
          this.errorMessage = 'Rol de usuario no reconocido';
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Correo o contraseña incorrectos';
      }
    });
  }
}