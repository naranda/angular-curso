import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    console.log('Borrando');

    this.heroeBorrado = this.heroes.shift() || '';

    console.log('Heroe borrado: ' + this.heroeBorrado);
  }

}
