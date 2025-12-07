import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join-class',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-class.component.html',
  styleUrl: './join-class.component.css'
})
export class JoinClassComponent {
  @Output() close = new EventEmitter<void>();
  @Output() join = new EventEmitter<string>();

  classCode: string = '';
  userName: string = 'Ameth de Jesus Mendez Toledo';
  userEmail: string = '221201juan.com@gmail.com';

  onClose() {
    this.close.emit();
  }

  onJoin() {
    if (this.classCode.trim()) {
      this.join.emit(this.classCode);
    }
  }

  changeAccount() {
    console.log('Cambiar de cuenta');
  }
}