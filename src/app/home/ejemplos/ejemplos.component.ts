import { Component } from '@angular/core';

interface Usuario{
    nombre: string;
    apellido: string;
    fechaInscripcion: Date;
}
@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.scss']
})
export class EjemplosComponent {
    activo = false;
    enable = true;
    change = false;
    fontS = false;

    getBackgroundColor(): object{
        return {
            backgroundColor: this.enable ? 'green' : 'red',
        };
    }

    heroes = ['Batman', 'Robin', 'Guasón', 'Riddler', 'Sr.Frio', 'Hugo Strange'];
    alternarEnable(){
        this.enable = !this.enable;
    }
    email ='';

    usuarios: Usuario[] =[
        {
            nombre: 'Ana',
            apellido: 'Lopez',
            fechaInscripcion: new Date(),
        },
        {
            nombre: 'Hiram',
            apellido: 'Abiff',
            fechaInscripcion: new Date(),
        }
    ]

}
