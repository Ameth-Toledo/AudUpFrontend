import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-material-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css'
})
export class MaterialCardComponent {
  @Input() teacherName: string = '';
  @Input() teacherImage: string = 'assets/avatar.png';
  @Input() date: string = '';
  @Input() content: string = '';
  @Input() materials: any[] = [];

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