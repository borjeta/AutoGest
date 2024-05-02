import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  standalone: true,
  imports: [],
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.css'
})
export class NavbarAdminComponent {
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');

    window.location.href = '/login';
  }
}
