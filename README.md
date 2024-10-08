# Semana3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

## Extrajimos la informaicon de la comida de una API; solamnete extrajimos los resultados de comida mexicana

Para poder hacerlo, utilizamos el observador de HTTP y nos suscribimos para poder mandar los datos a una variable y mostrarlos en el HTML.
```
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {
  }

obtenerInfo() {
    this.http.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican").subscribe(data => {
      this.comidas = data
    })
  }
```

## Input de busqueda

Insertamos un input para poder buscar una comida en especial (de las que nos arroja la API) y al hacer el evento KEYUP, se llama a la funcion para obtener los datos.

HTML:
```
<input type="text" placeholder="Realice su busqueda de comida" [(ngModel)]="busqueda" (keydown)="obtenerInfo()" >
```
app.component :
```
import { FormsModule } from '@angular/forms';
imports: [FormsModule],
busqueda = ""
```

## For e IF

El ciclo FOR se utilizo para recorrer el array de objetos y poder mostrar cada dato como decidimos, en este caso titulo, imagen y el id

El condicional IF se utilizo para filtrar los resultados, en el que comparamos si el comida.strMeal.toUpperCase().inlcudes(busqueda.toUpperCase()) (el nombre de la comida incluye el valor del input)

Lo ponemos en mayusculas ambos para poder comparar sin case sensitive (tambien se puede comparar en minusculas)

```
@for(comida of comidas.meals; track comida.strMeal) {
        @if (comida.strMeal.toUpperCase().includes(busqueda.toUpperCase())) {...}
...}
```

## Arreglando el app.config.ts

Esta vez nos guiamos de la documentacion de Angular y se nos hizo una manera muy sencilla el implementar tambien el uso de HttpClient:
```
provideHttpClient(withFetch())
```