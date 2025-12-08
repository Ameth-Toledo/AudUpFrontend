import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private router: Router) { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  sendToRegister(event: Event) {
    event.preventDefault()
    this.router.navigate(['auth/register'])
  }

  login(event: Event) {
    event.preventDefault();
    this.errorMessage = '';

    if (this.email === 'admin@upchiapas.edu.mx' && this.password === 'admin2025') {
      this.router.navigate(['dashboard/docente']);
    } else if (this.email === 'estudiante@upchiapas.edu.mx' && this.password === 'estudiante2025') {
      this.router.navigate(['dashboard/student']);
    } else {
      this.errorMessage = 'Correo o contraseña incorrectos';
    }
  }
}
