import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { __decorate } from "tslib";
import { NavbarComponent } from './components/navbar/navbar.component';
import { __metadata } from "tslib";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoginComponent, HomeComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
