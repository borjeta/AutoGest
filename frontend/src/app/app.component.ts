import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { __decorate } from "tslib";
import { NavbarComponent } from './components/navbar/navbar.component';
import { __metadata } from "tslib";
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http'; 
import { Navigation } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoginComponent, HomeComponent, NotFoundComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
