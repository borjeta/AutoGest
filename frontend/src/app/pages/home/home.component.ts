import { Component } from '@angular/core';
import { NavbarUserComponent } from '../../components/navbar-user/navbar-user.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NavbarUserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
