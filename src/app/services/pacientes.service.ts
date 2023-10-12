import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  public menu:any = [
    {
      titulo:'Doctores',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo:'Datos del doctor',url:'/dashboard/datos-doctor'}
      ]
    },
    {
      titulo:'Paciente',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo:'Registrar Paciente',url:'/dashboard/crear-paciente'},
        {titulo:'Datos del Paciente',url:'/dashboard/datos-paciente'}
      ]
    },
    {
      titulo:'Historial Clinico',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo:'Nuevo Historial',url:'/dashboard/nuevo-historial'},
        {titulo:'Historial',url:'/dashboard/historial-paciente'}
      ]
    }
  ]
  constructor() { }
}
