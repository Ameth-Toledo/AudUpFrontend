import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-card.component.html',
  styleUrl: './class-card.component.css'
})
export class ClassCardComponent {
  @Input() classId!: number;
  @Input() className: string = '';
  @Input() status: string = 'Activo';
  @Input() teacherName: string = '';
  @Input() teacherImage: string = 'assets/avatar.png';
  @Input() date: string = '';
  @Input() content: string = '';
  @Input() materials: any[] = [];
  @Input() isEditable: boolean = false;

  @Output() onEdit = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onClick = new EventEmitter<number>();

  editClass() {
    this.onEdit.emit(this.classId);
  }

  deleteClass() {
    this.onDelete.emit(this.classId);
  }

  viewClass() {
    this.onClick.emit(this.classId);
  }

  downloadFile(materialId: number) {
    console.log('Descargar archivo:', materialId);
  }

  getFileIcon(fileType: string): string {
    const iconMap: { [key: string]: string } = {
      'pdf': 'assets/pdf.png',
      'image': 'assets/picture.png',
      'presentation': 'assets/pptx.png',
      'spreadsheet': 'assets/excel.png',
      'video': 'assets/video.png',
      'code': 'assets/code.png',
      'document': 'assets/document.png',
      'audio': 'assets/audio.png',
      'compressed': 'assets/zip.png',
      'text': 'assets/text.png'
    };
    return iconMap[fileType] || 'assets/file.png';
  }
}