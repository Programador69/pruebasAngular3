import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})


@Injectable({providedIn: 'root'})
export class ListaComponent {
  constructor(private http: HttpClient) {
  }
  obtenerInfo() {
    this.http.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican").subscribe(data => {
      this.comidas = data
    })
  }

  comidas: any
  busqueda = ""
}
