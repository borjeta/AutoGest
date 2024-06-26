import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservasModule } from './reservas.module';
@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [ ReservasModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {


  constructor(private http: HttpClient) { }




  ngOnInit(ReservasModule : ReservasModule){
    ReservasModule.getReservas();
  }
  eliminarReserva(id: number) {
    console.log("Reserva eliminada");}
  editarReserva(id: number) {
    console.log("Reserva editada");
  }
  agregarReserva() {
    console.log("Reserva agregada");
  }
  verReserva() {
    console.log("Reserva vista");
  }
  buscarReserva() {
    console.log("Reserva buscada");
  }
  listarReservas() {
    console.log("Reservas listadas");
  }
  reservasPorUsuario() {
    console.log("Reservas por usuario");
  }
  reservasPorFecha() {
    console.log("Reservas por fecha");
  }
  reservasPorEstado() {
    console.log("Reservas por estado");
  }

}
