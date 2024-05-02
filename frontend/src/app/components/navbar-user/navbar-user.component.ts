import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [],
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent {
  constructor() { }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');

    window.location.href = '/login';
  }

  ngOnInit() { }

  ngOnDestroy() { }

}
