import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../components/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-homeadmin',
  standalone: true,
  imports: [NavbarAdminComponent],
  templateUrl: './homeadmin.component.html',
  styleUrl: './homeadmin.component.css'
})
export class HomeadminComponent {

}
