import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {
    alumnos = [
        {id: 1, nombre: 'Carlos', apellido: 'Lopez', edad: '20 años', estado: false},
        {id: 2, nombre: 'Manuel', apellido: 'Ibañez', edad: '39 años', estado: false},
        {id: 3, nombre: 'Roberto', apellido: 'Lapaz', edad: '6 años', estado: false},
        {id: 4, nombre: 'Tomas', apellido: 'Vazquez', edad: '38 años', estado: false},
        {id: 5, nombre: 'Gorge', apellido: 'Avila', edad: '42 años', estado: false},
    ]

    today = new Date();

    //alumnos = ['Carlos', 'Manuel', 'Enzo', 'Roberto', 'Tomas', 'Gorge', 'Vladimir'];

    /*alumnos = [
        ['Carlos', ' Lopez ', ' 20 años '],
        ['Manuel', ' Ibañez ', ' 39 años '],
        ['Roberto', ' Lapaz ', ' 6 años'],
        ['Tomas', ' Vazquez ', ' 38 años'],
        ['Gorge', ' Avila ', ' 42 años'],
    ]*/

}
