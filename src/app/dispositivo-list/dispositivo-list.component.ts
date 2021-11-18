import { Component, OnInit } from '@angular/core';
import { DeviceDataService } from '../device-data.service';
import { dispositivo } from './dispositivo';

@Component({
  selector: 'dispositivo-list',
  templateUrl: './dispositivo-list.component.html',
  styleUrls: ['./dispositivo-list.component.scss']
})
export class DispositivoListComponent implements OnInit {




  dispositivos : dispositivo [] = 
  []
  //[{

  //  id: 1,
  //  tipo: "Switch",
  //  nombre: "Tplink 2000",
  //  caracteristica: "24 Puertos",
  //  image: "https://www.hardpc.com.uy/web/image/product.template/41589/image_256"
//
  //},
  //{
  //  id: 2,
  //  tipo: "AP",
  //  nombre: "Ubiquiti PRo",
  //  caracteristica: "2 Puertos",
  //  image: "https://www.hardpc.com.uy/web/image/product.template/41589/image_256"
//
  //},
  //{
  //  id: 3,
  //  tipo: "Switch",
  //  nombre: "Tplink SG3000",
  //  caracteristica: "12 Puertos",
  //  image: "https://www.hardpc.com.uy/web/image/product.template/41589/image_256"
//
  //},]


  constructor(private DeviceDataService: DeviceDataService ) { }

  ngOnInit(): void {


    this.DeviceDataService.getAll().subscribe( dispositivos => this.dispositivos = dispositivos )
  }

}
