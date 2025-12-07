import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCardComponent } from "../../../../shared/components/material-card/material-card.component";

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [CommonModule, MaterialCardComponent],
  templateUrl: './class-detail.component.html',
  styleUrl: './class-detail.component.css'
})
export class ClassDetailComponent implements OnInit {
  classData: any = {};

  ngOnInit() {
    this.classData = {
      teacherName: 'Ali López Zúnun',
      teacherImage: 'assets/avatar.png',
      date: '15 Agosto',
      content: 'Hola chicos, les comparto la guía de introducción a POO. Aquí podrán encontrar los conceptos básicos que estaremos viendo en clase y algunos ejemplos que les ayudarán a reforzar el tema.',
      materials: [
        {
          id: 1,
          fileName: 'IntroduccionPOO.pdf',
          fileType: 'pdf',
          fileUrl: 'https://...'
        },
        {
          id: 2,
          fileName: 'IntroduccionPOO.png',
          fileType: 'image',
          fileUrl: 'https://...'
        }
      ]
    };
  }

  viewClass(classId: number) {
    console.log('Ver clase:', classId);
  }
}