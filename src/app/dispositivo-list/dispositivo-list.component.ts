import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dispositivo-list',
  templateUrl: './dispositivo-list.component.html',
  styleUrls: ['./dispositivo-list.component.scss']
})
export class DispositivoListComponent implements OnInit {

  dispositivo = {

    id: 1,
    tipo: "Switch",
    nombre: "Tplink 2000",
    caracteristica: "24 Puertos",
    image: "https://www.hardpc.com.uy/web/image/product.template/41589/image_256"

  }


  constructor() { }

  ngOnInit(): void {
  }

}
