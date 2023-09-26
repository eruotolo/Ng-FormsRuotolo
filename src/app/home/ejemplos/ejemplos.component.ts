import { Component } from '@angular/core';

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

}
