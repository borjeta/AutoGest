import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-propietario',
  standalone: true,
  imports: [],
  templateUrl: './navbar-propietario.component.html',
  styleUrl: './navbar-propietario.component.css'
})
export class NavbarPropietarioComponent {

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');

    window.location.href = '/login';
  }

}
