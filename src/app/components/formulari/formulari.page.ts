import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.page.html',
  styleUrls: ['./formulari.page.scss'],
})
export class FormulariPage implements OnInit {

  nombre;
  id;
  altura;
  largura;
  imagen;

  constructor(
    public service: ServiceService
  ) { }

  ngOnInit() { }

  addPokemon(){
    let data = {
      nombre: this.nombre,
      id: this.id,
      altura: this.altura,
      largura: this.largura,
      imagen: this.imagen
    };
    console.log(data.nombre, data.id, data.altura, data.largura, data.imagen);

    this.service.addPokemon(data).subscribe((response) => {
      console.log(response);
    });
  }

}
