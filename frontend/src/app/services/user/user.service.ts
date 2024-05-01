import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {


    this.http.get('http://localhost:3000/user').subscribe((data) => {
      console.log(data);
    }
    );


  }

}
