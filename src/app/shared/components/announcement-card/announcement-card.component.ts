import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcement-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement-card.component.html',
  styleUrl: './announcement-card.component.css'
})
export class AnnouncementCardComponent {
  @Input() announcementId!: number;
  @Input() teacherName: string = '';
  @Input() teacherImage: string = 'assets/default-avatar.png';
  @Input() date: string = '';
  @Input() content: string = '';
  @Input() isEditable: boolean = false;

  @Output() onEdit = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();

  editAnnouncement() {
    this.onEdit.emit(this.announcementId);
  }

  deleteAnnouncement() {
    this.onDelete.emit(this.announcementId);
  }
}
