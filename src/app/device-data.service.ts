import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dispositivo } from './dispositivo-list/dispositivo';


const URL = "http://localhost:3000/dispositivos"

@Injectable({
  providedIn: 'root'
})
export class DeviceDataService {

  constructor(private http: HttpClient) { }



getAll(): Observable<dispositivo[]>{
  return this.http.get<dispositivo[]>(URL);
}














}
