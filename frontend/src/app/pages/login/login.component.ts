import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginObject: Login;

  constructor(private http: HttpClient) {
    this.loginObject = new Login('', '');
  }

  loginfunction() {
    console.log(this.loginObject," has lanzado el evento loginfunction()");
    this.http.post('http://localhost:3000/login', this.loginObject).subscribe((data) => {
      console.log(data);
    });
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



