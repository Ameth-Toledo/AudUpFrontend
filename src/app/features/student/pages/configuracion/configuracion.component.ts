import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent implements OnInit {
  user: any = {};
  userBackup: any = {};
  isEditing: boolean = false;

  ngOnInit() {
    this.user = {
      id: 1,
      nombres: 'Ameth',
      segundo_nombre: 'de Jesus',
      apellido_paterno: 'Mendez', 
      apellido_materno: 'Toledo',
      email: '233363@ids.upchiapas.edu.mx', 
      telefono: '9613037813',
      avatar: 'assets/avatar.png'
    };
  }

  editProfile() {
    this.isEditing = true;
    this.userBackup = { ...this.user };
  }

  saveProfile() {
    this.isEditing = false;
    console.log('Guardando perfil:', this.user);
  }

  cancelEdit() {
    this.user = { ...this.userBackup };
    this.isEditing = false;
  }

  getFullName(): string {
    return `${this.user.nombres} ${this.user.segundo_nombre} ${this.user.apellido_paterno} ${this.user.apellido_materno}`;
  }
}