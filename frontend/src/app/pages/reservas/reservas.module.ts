import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReservasModule { 


  constructor( private http: HttpClient) { }

  //declaramos los metodos para obtener las reservas
  getReservas() {
    this.http.get('http://localhost:3000/reservas').subscribe( (res: any) => {
      console.log(res);
    });
  }

}
