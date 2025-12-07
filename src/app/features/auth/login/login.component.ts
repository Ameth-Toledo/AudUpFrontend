import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword = false;

  constructor (private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  sendToRegister(event: Event) {
    event.preventDefault()
    this.router.navigate(['auth/register'])
  }
}
