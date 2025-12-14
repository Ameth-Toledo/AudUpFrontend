import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { JoinAsignaturaService } from '../../services/join-asignature.service';

@Component({
  selector: 'app-join-class',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-class.component.html',
  styleUrl: './join-class.component.css'
})
export class JoinClassComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() joined = new EventEmitter<void>();

  classCode: string = '';
  userName: string = '';
  userEmail: string = '';
  userImage: string = 'assets/avatar.png';
  userInitial: string = 'U';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private joinAsignaturaService: JoinAsignaturaService
  ) {}

  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.userName = user.name;
      this.userEmail = user.email;
      this.userImage = user.profileImageUrl || 'assets/avatar.png';
      this.userInitial = user.name.charAt(0).toUpperCase();
    }
  }

  onClose() {
    this.close.emit();
  }

  onJoin() {
    if (this.classCode.trim().length !== 8) {
      this.errorMessage = 'El código debe tener 8 caracteres';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.joinAsignaturaService.joinByCode(this.classCode.trim()).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.joined.emit();
        this.onClose();
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Error al unirse a la clase. Verifica el código.';
      }
    });
  }

  changeAccount() {
    this.authService.logout();
    window.location.href = '/auth/login';
  }
}