import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginObject: Login;


  constructor(private http: HttpClient, private Router: Router) {
    this.loginObject = new Login('', '');
  }

  loginfunction() {

    this.http.post('http://localhost:3000/userRoute/login', this.loginObject).subscribe((data: any) => {
      if (data['user']['role'] == 'admin') {
        this.Router.navigate(['/home-admin']);
      }
      else if (data['user']['role'] == 'user') {
        this.Router.navigate(['/home-user']);
      } else if (data['user']['role'] == 'propietario') {
        this.Router.navigate(['/home-propietario']);
      }
    }
    );
  }
}

export class Login {

  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}



