import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../components/header/header.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SidebarComponent, HeaderComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }
}
