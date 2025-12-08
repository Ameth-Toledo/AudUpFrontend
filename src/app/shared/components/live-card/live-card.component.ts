import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-card.component.html',
  styleUrl: './live-card.component.css'
})
export class LiveCardComponent {
  @Input() teacherName: string = '';
  @Input() teacherImage: string = 'assets/avatar.png';
  @Input() date: string = '';
  @Input() message: string = '';
  @Input() isLive: boolean = true;

  @Output() onJoinLive = new EventEmitter<void>();
  @Output() onDownloadPDF = new EventEmitter<void>();

  joinLive() {
    this.onJoinLive.emit();
  }

  downloadPDF() {
    this.onDownloadPDF.emit();
  }
}