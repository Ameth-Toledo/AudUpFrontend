import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { RegisterRequest } from '../models/register.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  showPassword = false;
  showConfirmPassword = false;
  registerForm: FormGroup;
  selectedImage: File | null = null;
  imagePreview: string | null = null;
  isLoading = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      middleName: [''],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      secondLastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      roleId: [2]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      if (file.type.startsWith('image/')) {
        this.selectedImage = file;
        
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        this.errorMessage = 'Por favor selecciona una imagen válida';
      }
    }
  }

  removeImage() {
    this.selectedImage = null;
    this.imagePreview = null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const formValue = this.registerForm.value;
      const registerData: RegisterRequest = {
        firstName: formValue.firstName,
        middleName: formValue.middleName || '',
        lastName: formValue.lastName,
        secondLastName: formValue.secondLastName || '',
        email: formValue.email,
        password: formValue.password,
        roleId: formValue.roleId,
        phone: formValue.phone,
        profileImage: this.selectedImage || undefined
      };

      this.userService.register(registerData).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.router.navigate(['auth/login']);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Error al registrar usuario. Intenta nuevamente.';
        }
      });
    } else {
      Object.keys(this.registerForm.controls).forEach(key => {
        const control = this.registerForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  sendToLogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['auth/login']);
  }
}