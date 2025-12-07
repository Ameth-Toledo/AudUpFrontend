import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCardComponent } from "../../../../shared/components/subject-card/subject-card.component";
import { JoinClassComponent } from "../../components/join-class/join-class.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SubjectCardComponent, JoinClassComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  subjects: any[] = [
    {
      subject_id: 1,
      subject_name: "Programación Orientada a Objetos",
      description: "Curso de POO desde cero",
      teacher_name: "Ameth Toledo",
      image_teacher: "assets/avatar.png",
      grade_level: "3 Cuatrimestre",
      school_year: "2024-2025",
      is_active: true
    },
    {
      subject_id: 2,
      subject_name: "Programacion Web",
      description: "Curso de Angular web desde cero",
      teacher_name: "Ameth Toledo",
      image_teacher: "assets/avatar.png",
      grade_level: "4 Cuatrimestre",
      school_year: "2024-2025",
      is_active: true
    },
    {
      subject_id: 3,
      subject_name: "Bases de datos",
      description: "Curso de Bases de datos desde cero",
      teacher_name: "Ameth Toledo",
      image_teacher: "assets/avatar.png",
      grade_level: "5 Cuatrimestre",
      school_year: "2024-2025",
      is_active: true
    },
    {
      subject_id: 4,
      subject_name: "Sistemas Operativos",
      description: "Curso de sistemas operativos desde cero",
      teacher_name: "Ameth Toledo",
      image_teacher: "assets/avatar.png",
      grade_level: "7 Cuatrimestre",
      school_year: "2024-2025",
      is_active: true
    },
    {
      subject_id: 5,
      subject_name: "Diseño de interfaces",
      description: "Curso de UI/UX desde cero",
      teacher_name: "Ameth Toledo",
      image_teacher: "assets/avatar.png",
      grade_level: "5 Cuatrimestre",
      school_year: "2024-2025",
      is_active: true
    }
  ];
  showJoinModal: boolean = false;

  openJoinModal() {
    this.showJoinModal = true;
  }

  closeJoinModal() {
    this.showJoinModal = false;
  }

  joinClass(code: string) {
    console.log('Unirse a clase con código:', code);
    this.closeJoinModal();
  }
}